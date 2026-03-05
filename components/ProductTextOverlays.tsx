"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import { Product } from "@/data/products";

interface ProductTextOverlaysProps {
    product: Product;
    scrollYProgress: MotionValue<number>;
}

export default function ProductTextOverlays({ product, scrollYProgress }: ProductTextOverlaysProps) {
    // We'll map the scroll progress from 0 to 1 into 4 distinct segments (0-0.25, 0.25-0.5, 0.5-0.75, 0.75-1.0)

    // Section 1
    const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.25], [1, 1, 0, 0]);
    const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

    // Section 2
    const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.45, 0.5], [0, 1, 1, 0]);
    const y2 = useTransform(scrollYProgress, [0.2, 0.3, 0.45, 0.5], [50, 0, 0, -50]);

    // Section 3
    const opacity3 = useTransform(scrollYProgress, [0.45, 0.55, 0.7, 0.75], [0, 1, 1, 0]);
    const y3 = useTransform(scrollYProgress, [0.45, 0.55, 0.7, 0.75], [50, 0, 0, -50]);

    // Section 4
    const opacity4 = useTransform(scrollYProgress, [0.7, 0.8, 0.95, 1], [0, 1, 1, 0]);
    const y4 = useTransform(scrollYProgress, [0.7, 0.8, 0.95, 1], [50, 0, 0, -50]);

    const TextBlock = ({ title, subtitle, opacity, y, align }: { title: string; subtitle: string; opacity: MotionValue<number>; y: MotionValue<number>; align: string }) => (
        <motion.div
            className={`absolute inset-0 flex flex-col justify-center px-10 md:px-24 pointer-events-none ${align}`}
            style={{ opacity, y }}
        >
            <div className="max-w-xl">
                <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-xl">
                    {title}
                </h2>
                {subtitle && (
                    <p className="text-xl md:text-3xl text-white/90 font-medium drop-shadow-md">
                        {subtitle}
                    </p>
                )}
            </div>
        </motion.div>
    );

    return (
        <div className="absolute inset-0 w-full h-full">
            <TextBlock
                title={product.section1.title}
                subtitle={product.section1.subtitle}
                opacity={opacity1}
                y={y1}
                align="items-start text-left mt-[-10vh]"
            />
            <TextBlock
                title={product.section2.title}
                subtitle={product.section2.subtitle}
                opacity={opacity2}
                y={y2}
                align="items-end text-right ml-auto"
            />
            <TextBlock
                title={product.section3.title}
                subtitle={product.section3.subtitle}
                opacity={opacity3}
                y={y3}
                align="items-start text-left"
            />
            <TextBlock
                title={product.section4.title}
                subtitle={product.section4.subtitle}
                opacity={opacity4}
                y={y4}
                align="items-center text-center mx-auto"
            />
        </div>
    );
}
