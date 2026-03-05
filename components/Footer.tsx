"use client";

import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-16 border-t border-gray-800 relative z-10">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">
                            Monster Energy
                        </h2>
                        <p className="text-sm text-gray-500 max-w-xs">
                            The future of energy. Bold, 100% turbocharged energy drinks delivered straight to your door.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <a href="#" className="text-gray-500 hover:text-orange-400 transition-colors"><Instagram className="w-5 h-5" /></a>
                            <a href="#" className="text-gray-500 hover:text-orange-400 transition-colors"><Twitter className="w-5 h-5" /></a>
                            <a href="#" className="text-gray-500 hover:text-orange-400 transition-colors"><Facebook className="w-5 h-5" /></a>
                        </div>
                    </div>

                    {/* Shop */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Shop Links</h3>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-orange-400 transition-colors">Cream Mango</a></li>
                            <li><a href="#" className="hover:text-green-400 transition-colors">Original</a></li>
                            <li><a href="#" className="hover:text-green-400 transition-colors">Ruby Grapefruit</a></li>
                            <li><a href="#" className="hover:text-orange-400 transition-colors">All Products</a></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Support</h3>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-orange-400 transition-colors">FAQ</a></li>
                            <li><a href="#" className="hover:text-orange-400 transition-colors">Shipping & Returns</a></li>
                            <li><a href="#" className="hover:text-orange-400 transition-colors">Contact Us</a></li>
                            <li><a href="#" className="hover:text-orange-400 transition-colors">Privacy Policy</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Stay Fresh</h3>
                        <p className="text-sm text-gray-400 mb-4">Subscribe to our newsletter for 10% off your first order.</p>
                        <form className="flex" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Your email"
                                className="bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-1 focus:ring-orange-500 w-full"
                            />
                            <button
                                type="submit"
                                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-r-md transition-colors"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-gray-800 text-center text-sm text-gray-600">
                    <p>&copy; {new Date().getFullYear()} Monster Energy. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
