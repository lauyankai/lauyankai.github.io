"use client";
import { motion } from "framer-motion";
import { Terminal, Cpu } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
    const [currentTime, setCurrentTime] = useState("");

    // Simple ticking HUD clock
    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setCurrentTime(now.toUTCString().replace("GMT", "UTC"));
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cyber-dark pt-24 pb-16">
            {/* Background grid pattern */}
            <div className="absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-15 pointer-events-none"></div>

            {/* Top HUD decoration */}
            <div className="absolute top-0 left-0 w-full border-b border-cyber-blue/15 bg-black/60 px-6 py-2.5 z-30 hidden md:flex justify-between items-center font-mono text-[10px] tracking-widest text-gray-500">
                <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyber-blue animate-pulse"></span>
                    <span className="text-cyber-blue">SYS_STATUS: OPERATIONAL</span>
                    <span className="text-gray-700">|</span>
                    <span>NODE: DEV_CLUSTER_PORTFOLIO</span>
                </div>
                <div className="flex items-center gap-4">
                    <span>IP: 192.168.0.8</span>
                    <span className="text-gray-700">|</span>
                    <span className="text-cyber-purple">{currentTime}</span>
                </div>
            </div>

            <div className="container mx-auto px-6 z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                
                {/* Left Panel: Primary Info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full lg:w-6/12 flex flex-col gap-6"
                >
                    <div className="inline-flex items-center gap-2 self-start px-3 py-1 bg-cyber-blue/10 border border-cyber-blue/30 text-cyber-blue font-mono text-xs tracking-wider uppercase rounded-sm">
                        <Terminal className="w-3.5 h-3.5" />
                        <span>System_Active_v4.0</span>
                    </div>

                    <div className="flex flex-col select-none">
                        <h1 className="text-6xl sm:text-7xl xl:text-9xl font-black font-mono tracking-tighter uppercase leading-[0.85] text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue via-indigo-500 to-cyber-purple drop-shadow-[0_0_20px_rgba(0,240,255,0.25)]">
                            Lau <br /> Yan Kai
                        </h1>
                    </div>

                    <h2 className="text-xl sm:text-2xl md:text-3xl font-light tracking-wide text-gray-300">
                        <span className="text-cyber-blue">/</span> Data Engineering & AI Architecture
                    </h2>

                    <div className="flex flex-wrap gap-4 mt-2">
                        <button className="px-6 py-3.5 border border-cyber-blue text-cyber-blue bg-cyber-blue/5 hover:bg-cyber-blue hover:text-black transition-all duration-300 font-mono text-xs sm:text-sm uppercase tracking-widest shadow-[0_0_15px_rgba(0,240,255,0.1)] hover:shadow-[0_0_25px_rgba(0,240,255,0.4)]">
                            Initialize Contact //
                        </button>
                        <button className="px-6 py-3.5 bg-cyber-gray hover:bg-white hover:text-black border border-white/10 hover:border-white transition-all duration-300 font-mono text-xs sm:text-sm uppercase tracking-widest">
                            View Repositories
                        </button>
                    </div>
                </motion.div>

                {/* Right Panel: Identity Logs Card (Simple & Balanced) */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full lg:w-6/12"
                >
                    <div className="relative overflow-hidden cyber-panel-glass p-6 md:p-8 rounded border border-cyber-blue/20 bg-black/40">
                        {/* Scanning line animation */}
                        <div className="absolute top-0 left-0 w-full h-[2px] bg-cyber-blue/40 shadow-[0_0_12px_#00f0ff] animate-scan pointer-events-none z-10"></div>
                        
                        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4 font-mono text-xs">
                            <span className="text-cyber-blue uppercase font-bold flex items-center gap-1.5">
                                <Cpu className="w-4 h-4" /> Identity_Database_Logs
                            </span>
                            <span className="text-gray-500 text-[10px]">VER: 4.10.2</span>
                        </div>

                        <div className="font-mono text-xs sm:text-sm text-gray-400 space-y-4 leading-relaxed">
                            <div className="flex flex-col sm:flex-row justify-between border-b border-white/5 pb-2.5">
                                <span className="text-gray-500 sm:w-1/3">IDENTITY:</span>
                                <span className="text-white sm:w-2/3 font-semibold text-neon-glow">LAU YAN KAI</span>
                            </div>
                            <div className="flex flex-col sm:flex-row justify-between border-b border-white/5 pb-2.5">
                                <span className="text-gray-500 sm:w-1/3">SPECIALTY:</span>
                                <span className="text-white sm:w-2/3">Data Pipelines, ML Engineering & Interactive Pedagogies</span>
                            </div>
                            <div className="flex flex-col sm:flex-row justify-between border-b border-white/5 pb-2.5">
                                <span className="text-gray-500 sm:w-1/3">MISSION:</span>
                                <span className="text-white sm:w-2/3">Seeking a 1-year industrial placement starting September 2026.</span>
                            </div>
                            <div className="flex flex-col sm:flex-row justify-between pb-1">
                                <span className="text-gray-500 sm:w-1/3">CORE_STACK:</span>
                                <span className="text-cyber-blue sm:w-2/3 font-semibold terminal-cursor">
                                    [Python, Spark, Next.js, PyTorch, React, SQL]
                                </span>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}