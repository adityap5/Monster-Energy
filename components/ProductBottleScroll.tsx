"use client";

import { useRef, useEffect, useState } from "react";
import { useScroll } from "framer-motion";
import { Product } from "@/data/products";
import ProductTextOverlays from "./ProductTextOverlays";

interface ProductBottleScrollProps {
    product: Product;
}

export default function ProductBottleScroll({ product }: ProductBottleScrollProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const frameCount = 120;
    const imagesRef = useRef<HTMLImageElement[]>([]);
    const [imagesLoaded, setImagesLoaded] = useState(false);

    useEffect(() => {
        let loaded = 0;
        imagesRef.current = [];

        for (let i = 1; i <= frameCount; i++) {
            const img = new window.Image();
            img.src = `${product.folderPath}/${i}.webp`;

            img.onload = () => {
                loaded++;
                if (loaded === frameCount) setImagesLoaded(true);
            };

            img.onerror = () => {
                loaded++;
                if (loaded === frameCount) setImagesLoaded(true);
            };

            imagesRef.current.push(img);
        }
    }, [product.folderPath]);

    useEffect(() => {
        if (!imagesLoaded) return;

        let animationFrameId: number;
        const canvas = canvasRef.current;
        if (!canvas) return;
        const context = canvas.getContext("2d");
        if (!context) return;

        // Use current window dimensions initially
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const render = () => {
            const progress = scrollYProgress.get();
            const frameIndex = Math.min(
                frameCount - 1,
                Math.floor(progress * frameCount)
            );

            const img = imagesRef.current[frameIndex];
            // Always fill with black first
            context.fillStyle = "#000000";
            context.fillRect(0, 0, canvas.width, canvas.height);

            if (img && img.complete && img.naturalHeight !== 0) {
                // "cover" mode: fill the entire canvas
                const hRatio = canvas.width / img.width;
                const vRatio = canvas.height / img.height;
                const ratio = Math.max(hRatio, vRatio);

                const centerShift_x = (canvas.width - img.width * ratio) / 2;
                const centerShift_y = (canvas.height - img.height * ratio) / 2;

                context.drawImage(img, 0, 0, img.width, img.height,
                    centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
            }
            animationFrameId = requestAnimationFrame(render);
        };

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        window.addEventListener('resize', handleResize);

        render();

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
        };
    }, [imagesLoaded, scrollYProgress]);

    return (
        <div ref={containerRef} className="relative h-[500vh] w-full">
            <div className="sticky top-0 h-screen w-full overflow-hidden bg-transparent">
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 w-full h-full z-0 pointer-events-none"
                />

                <div className="absolute inset-0 z-10 w-full h-full pointer-events-none">
                    <ProductTextOverlays product={product} scrollYProgress={scrollYProgress} />
                </div>
            </div>
        </div>
    );
}
