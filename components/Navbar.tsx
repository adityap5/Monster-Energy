"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Banana, Menu } from "lucide-react";

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
        <motion.nav
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled
                ? "bg-glass border-b border-white/10 shadow-2xl py-4"
                : "bg-transparent py-6"
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
                <div className="flex items-center gap-2 cursor-pointer group">
                    <Banana className="w-8 h-8 text-orange-400 group-hover:text-pink-400 transition-colors duration-300" />
                    <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600 tracking-tight">
                        Monster Energy
                    </h1>
                </div>

                <div className="flex items-center gap-6"> {/* New wrapper div */}
                    <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-white/70"> {/* Updated nav element */}
                        <a href="#" className="hover:text-white transition-colors">Shop</a>
                        <a href="#" className="hover:text-white transition-colors">Story</a> {/* Changed 'About' to 'Story' */}
                        <a href="#" className="hover:text-white transition-colors">Impact</a> {/* Changed 'Process' to 'Impact' */}
                    </nav>

                    <button className="glow-effect hover-glow px-6 py-2.5 bg-white text-black text-sm font-bold rounded-full hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.3)]"> {/* Updated button className and content */}
                        Order Now
                    </button>
                    <button className="md:hidden text-white"><Menu /></button> {/* Added new button */}
                </div>
            </div>
        </motion.nav>
    );
}
