"use client";
import Image from "next/image";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Droplet, Leaf, ShieldCheck, ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import ProductBottleScroll from "@/components/ProductBottleScroll";

export default function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const product = products[currentIndex];

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        document.documentElement.style.setProperty("--product-gradient", product.gradient);
    }, [currentIndex, product]);

    const nextProduct = () => setCurrentIndex((prev) => (prev + 1) % products.length);
    const prevProduct = () => setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);

    return (
        <div className="relative min-h-screen text-white">
            {/* Fixed Left/Right Navigation */}
            <button
                onClick={prevProduct}
                className="fixed left-4 md:left-8 top-1/2 -translate-y-1/2 z-50 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full transition-all"
                aria-label="Previous Flavor"
            >
                <ChevronLeft size={32} />
            </button>

            <button
                onClick={nextProduct}
                className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full transition-all"
                aria-label="Next Flavor"
            >
                <ChevronRight size={32} />
            </button>

            {/* Fixed Bottom Menu */}
            <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex gap-2 md:gap-4 p-2 bg-glass border-glass rounded-full shadow-2xl">
                {products.map((p, idx: number) => (
                    <button
                        key={p.id}
                        onClick={() => setCurrentIndex(idx)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${idx === currentIndex
                            ? "bg-white text-black shadow-lg scale-105"
                            : "text-white/60 hover:text-white hover:bg-white/10"
                            }`}
                    >
                        {p.name.split(" ")[1]}
                    </button>
                ))}
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="w-full"
                >
                    {/* Engine: Scrollytelling Component */}
                    <ProductBottleScroll product={product} />

                    {/* Product Details Section */}
                    <section className="relative z-20 py-32 px-6 md:px-20" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
                        <div className="container mx-auto max-w-6xl">
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8 }}
                                className="grid md:grid-cols-2 gap-16 items-center"
                            >
                                <div>
                                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text" style={{ backgroundImage: product.gradient }}>
                                        {product.detailsSection.title}
                                    </h2>
                                    <p className="text-xl text-white/80 leading-relaxed mb-8">
                                        {product.detailsSection.description}
                                    </p>

                                    <div className="grid grid-cols-3 gap-6">
                                        {product.stats.map((stat, idx: number) => (
                                            <div key={idx} className="pl-4" style={{ borderLeft: `2px solid ${product.themeColor}` }}>
                                                <div className="text-3xl font-bold mb-1" style={{ color: product.themeColor }}>{stat.val}</div>
                                                <div className="text-xs text-white/40 uppercase tracking-widest font-semibold">{stat.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="relative h-[600px] rounded-3xl overflow-hidden bg-glass border-glass flex items-center justify-center glow-effect hover-glow" style={{ boxShadow: `0 0 60px ${product.glowColor}` }}>
                                    <Image
                                        src={`${product.folderPath}/120.webp`}
                                        alt={product.detailsSection.imageAlt}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </section>

                    {/* Freshness Section */}
                    <section className="relative z-20 py-32 px-6 md:px-20" style={{ background: 'var(--surface-2)' }}>
                        <div className="container mx-auto max-w-4xl text-center">
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8 }}
                            >
                                <h3
                                    className="text-3xl md:text-5xl font-bold mb-8 text-premium"
                                    style={{ backgroundImage: product.gradient }}
                                >{product.freshnessSection.title}</h3>
                                <p className="text-xl md:text-2xl leading-relaxed font-light" style={{ color: 'rgba(255,255,255,0.55)' }}>
                                    {product.freshnessSection.description}
                                </p>
                            </motion.div>
                        </div>
                    </section>

                    {/* Buy Now Section */}
                    <section className="relative z-20 py-32 px-6 md:px-20" style={{ background: product.gradient }}>
                        <div className="container mx-auto max-w-6xl block md:flex items-center justify-between gap-12 bg-glass border-glass p-12 md:p-20 rounded-[3rem]" style={{ boxShadow: `0 20px 80px ${product.glowColor}` }}>
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="flex-1 mb-12 md:mb-0"
                            >
                                <h2 className="text-5xl font-bold mb-4">{product.name}</h2>
                                <p className="text-2xl font-light mb-8">{product.description}</p>

                                <ul className="space-y-4 mb-12">
                                    <li className="flex items-center gap-3 text-lg"><Droplet className="text-white" /> {product.buyNowSection.processingParams[0]}</li>
                                    <li className="flex items-center gap-3 text-lg"><Leaf className="text-white" /> {product.buyNowSection.processingParams[1]}</li>
                                    <li className="flex items-center gap-3 text-lg"><ShieldCheck className="text-white" /> {product.buyNowSection.processingParams[2]}</li>
                                </ul>

                                <div className="flex items-end gap-4 mb-8">
                                    <span className="text-6xl font-black">{product.price}</span>
                                    <span className="text-xl opacity-80 pb-2">{product.buyNowSection.unit}</span>
                                </div>

                                <button className="w-full md:w-auto px-12 py-5 bg-white text-black text-xl font-bold rounded-full hover:scale-105 transition-transform flex items-center justify-center gap-4 glow-effect hover-glow" style={{ boxShadow: `0 0 30px ${product.glowColor}` }}>
                                    Add to Cart <ArrowRight />
                                </button>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="flex-1 bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md"
                            >
                                <h4 className="text-xl font-bold mb-4 text-white">Delivery Promise</h4>
                                <p className="text-white/80 mb-8">{product.buyNowSection.deliveryPromise}</p>

                                <h4 className="text-xl font-bold mb-4 text-white">Return Policy</h4>
                                <p className="text-white/80">{product.buyNowSection.returnPolicy}</p>
                            </motion.div>
                        </div>
                    </section>

                    {/* Next Flavor Button */}
                    <section className="relative z-20 py-20 px-6 flex justify-center" style={{ background: 'var(--background)' }}>
                        <motion.button
                            onClick={nextProduct}
                            whileHover={{ scale: 1.04, y: -4 }}
                            whileTap={{ scale: 0.97 }}
                            className="group px-16 py-8 bg-glass border-glass rounded-2xl transition-all flex items-center gap-8 glow-effect hover-glow"
                            style={{ boxShadow: `0 0 40px ${product.glowColor}` }}
                        >
                            <div className="text-left">
                                <div className="text-xs uppercase tracking-[0.3em] mb-2" style={{ color: product.themeColor }}>Continue the journey</div>
                                <div className="text-3xl text-white font-bold tracking-tight">Try Next Flavor</div>
                            </div>
                            <ArrowRight className="w-10 h-10 transition-transform group-hover:translate-x-2" style={{ color: product.themeColor }} />
                        </motion.button>
                    </section>

                </motion.div>
            </AnimatePresence>
        </div>
    );
}
