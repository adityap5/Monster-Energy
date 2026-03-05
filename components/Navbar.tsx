"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Banana } from "lucide-react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/10 backdrop-blur-xl border-b border-white/20 py-4 shadow-lg" : "bg-transparent py-6"
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
                <div className="flex items-center gap-2 cursor-pointer group">
                    <Banana className="w-8 h-8 text-orange-400 group-hover:text-pink-400 transition-colors duration-300" />
                    <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-pink-500 tracking-tight">
                        Nano Banana
                    </h1>
                </div>

                <nav className="hidden md:flex items-center gap-8 font-medium text-white/90">
                    <a href="#" className="hover:text-orange-400 transition-colors duration-300">Shop</a>
                    <a href="#" className="hover:text-orange-400 transition-colors duration-300">About</a>
                    <a href="#" className="hover:text-orange-400 transition-colors duration-300">Process</a>
                </nav>

                <button className="relative overflow-hidden group bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:shadow-[0_0_30px_rgba(249,115,22,0.8)]">
                    <span className="relative z-10">Order Now</span>
                    <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                </button>
            </div>
        </motion.header>
    );
}
