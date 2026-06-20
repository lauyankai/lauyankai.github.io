"use client";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white px-6">
            
            {/* Fixed rotated email on the left (abhijeetBhale style) */}
            <a 
                href="mailto:contact@lauyankai.com" 
                className="fixed-email hidden lg:block"
            >
                contact@lauyankai.com
            </a>

            {/* Centered Hero Content */}
            <div className="max-w-4xl mx-auto text-center flex flex-col items-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center gap-6"
                >
                    {/* Centered Title with Hover Text Outline-to-Fill Effect */}
                    <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold flex flex-wrap items-center justify-center gap-y-2 gap-x-4">
                        <span className="text-white">Hi, I'm</span>
                        <span className="button select-none outline-none group text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black">
                            <span className="actual-text">&nbsp;LAU YAN KAI&nbsp;</span>
                            <span aria-hidden="true" className="hover-text group-hover:w-full">&nbsp;LAU YAN KAI&nbsp;</span>
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-lg sm:text-xl md:text-2xl text-light mt-3 tracking-wide max-w-2xl font-light">
                        Data Engineering & AI Architecture
                    </p>

                    {/* Brief description */}
                    <p className="text-gray-400 text-sm sm:text-base max-w-xl leading-relaxed mt-2 font-mono">
                        Designing robust data pipelines, applying predictive AI algorithms, and building interactive systems. Actively seeking a one-year placement starting Sep 2026.
                    </p>

                    {/* View Projects Button with shadow hover */}
                    <div className="mt-8">
                        <a href="#projects" className="shadow__btn">
                            View Projects
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}