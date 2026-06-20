"use client";
import { motion } from "framer-motion";
import { Terminal, Cpu, Sparkles, Database, Server, Workflow, Network, Play, RefreshCw } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const LOG_TEMPLATES = [
    { type: "INGEST", message: "Ingested Kafka stream: click_events [14.8k msg/sec]", color: "text-cyan-400" },
    { type: "SPARK", message: "Spark session executor allocated: 8 cores, 32GB RAM", color: "text-amber-400" },
    { type: "TRANSFORM", message: "Cleaned null entities in user_profile dataset", color: "text-purple-400" },
    { type: "STORE", message: "Dumped partitioned Parquet logs to S3 Data Lake", color: "text-emerald-400" },
    { type: "TRAIN", message: "Model epoch 12 complete (Val_Loss: 0.0084, Acc: 99.1%)", color: "text-fuchsia-400" },
    { type: "VECTOR", message: "Upserted 1,024 vector embeddings to database cluster", color: "text-pink-400" },
    { type: "PIPELINE", message: "ETL Job complete: pipeline_v4_daily (duration: 38s)", color: "text-emerald-400" },
    { type: "KAFKA", message: "Topic offset committed successfully", color: "text-slate-400" }
];

export default function Hero() {
    const [currentTime, setCurrentTime] = useState("");
    const [logs, setLogs] = useState<string[]>([]);
    const terminalEndRef = useRef<HTMLDivElement>(null);

    // Live clock
    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setCurrentTime(now.toUTCString().replace("GMT", "UTC"));
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    // Logging stream simulator
    useEffect(() => {
        const initialLogs = Array.from({ length: 5 }).map((_, i) => {
            const temp = LOG_TEMPLATES[i % LOG_TEMPLATES.length];
            const time = new Date().toLocaleTimeString().split(" ")[0];
            return `[${time}] [${temp.type}] ${temp.message}`;
        });
        setLogs(initialLogs);

        const interval = setInterval(() => {
            setLogs(prev => {
                const nextTemp = LOG_TEMPLATES[Math.floor(Math.random() * LOG_TEMPLATES.length)];
                const time = new Date().toLocaleTimeString().split(" ")[0];
                const nextLog = `[${time}] [${nextTemp.type}] ${nextTemp.message}`;
                return [...prev.slice(-10), nextLog]; // Keep last 10 logs
            });
        }, 1600);

        return () => clearInterval(interval);
    }, []);

    // Autoscroll terminal
    useEffect(() => {
        terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [logs]);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cyber-dark pt-20 pb-16">
            <style>{`
                @keyframes dash {
                    to {
                        stroke-dashoffset: -20;
                    }
                }
                .animated-pipe {
                    stroke-dasharray: 6, 4;
                    animation: dash 1.2s linear infinite;
                }
            `}</style>

            {/* Background grid */}
            <div className="absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-15 pointer-events-none"></div>

            {/* Top HUD bar */}
            <div className="absolute top-0 left-0 w-full border-b border-cyber-blue/15 bg-black/60 px-6 py-2.5 z-30 hidden md:flex justify-between items-center font-mono text-[10px] tracking-widest text-gray-500">
                <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyber-blue animate-pulse"></span>
                    <span className="text-cyber-blue">SYS_STATUS: ACTIVE</span>
                    <span className="text-gray-700">|</span>
                    <span>NODE: DEV_CLUSTER_PORTFOLIO</span>
                </div>
                <div className="flex items-center gap-4">
                    <span>IP: 192.168.0.8</span>
                    <span className="text-gray-700">|</span>
                    <span className="text-cyber-purple">{currentTime}</span>
                </div>
            </div>

            <div className="container mx-auto px-6 z-10 flex flex-col lg:flex-row items-center gap-12 mt-6">
                
                {/* Left Panel: Identity & Details */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="lg:w-6/12 flex flex-col gap-6"
                >
                    <div className="inline-flex items-center gap-2 self-start px-3 py-1 bg-cyber-blue/10 border border-cyber-blue/30 text-cyber-blue font-mono text-xs tracking-wider uppercase rounded-sm">
                        <Terminal className="w-3.5 h-3.5" />
                        <span>System_Active_Core_v4.0</span>
                    </div>

                    <div className="flex flex-col select-none">
                        <h1 className="text-6xl sm:text-7xl xl:text-9xl font-black font-mono tracking-tighter uppercase leading-[0.85] text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue via-indigo-500 to-cyber-purple drop-shadow-[0_0_20px_rgba(0,240,255,0.25)]">
                            Lau <br /> Yan Kai
                        </h1>
                    </div>

                    <h2 className="text-xl sm:text-2xl md:text-3xl font-light tracking-wide text-gray-300 flex items-center gap-3">
                        <span className="text-cyber-blue">/</span> Data Engineering & AI Architecture
                    </h2>

                    {/* HUD Details Panel */}
                    <div className="relative overflow-hidden cyber-panel-glass p-6 md:p-8 rounded border border-cyber-blue/20 bg-black/40">
                        <div className="absolute top-0 left-0 w-full h-[2px] bg-cyber-blue/40 shadow-[0_0_12px_#00f0ff] animate-scan pointer-events-none z-10"></div>
                        
                        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4 font-mono text-xs">
                            <span className="text-cyber-blue uppercase font-bold flex items-center gap-1.5">
                                <Cpu className="w-4 h-4" /> Identity_Database_Logs
                            </span>
                            <span className="text-gray-500 text-[10px]">VER: 4.10.2</span>
                        </div>

                        <div className="font-mono text-xs sm:text-sm text-gray-400 space-y-3.5 leading-relaxed">
                            <div className="flex flex-col sm:flex-row justify-between border-b border-white/5 pb-2">
                                <span className="text-gray-500 sm:w-1/3">IDENTITY:</span>
                                <span className="text-white sm:w-2/3 font-semibold text-neon-glow">LAU YAN KAI</span>
                            </div>
                            <div className="flex flex-col sm:flex-row justify-between border-b border-white/5 pb-2">
                                <span className="text-gray-500 sm:w-1/3">SPECIALTY:</span>
                                <span className="text-white sm:w-2/3">Data Pipelines, ML Engineering & Interactive Pedagogies</span>
                            </div>
                            <div className="flex flex-col sm:flex-row justify-between border-b border-white/5 pb-2">
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

                    <div className="flex flex-wrap gap-4 mt-4">
                        <button className="px-6 py-3.5 border border-cyber-blue text-cyber-blue bg-cyber-blue/5 hover:bg-cyber-blue hover:text-black transition-all duration-300 font-mono text-xs sm:text-sm uppercase tracking-widest shadow-[0_0_15px_rgba(0,240,255,0.1)] hover:shadow-[0_0_25px_rgba(0,240,255,0.4)]">
                            Initialize Contact //
                        </button>
                        <button className="px-6 py-3.5 bg-cyber-gray hover:bg-white hover:text-black border border-white/10 hover:border-white transition-all duration-300 font-mono text-xs sm:text-sm uppercase tracking-widest">
                            View Repositories
                        </button>
                    </div>
                </motion.div>

                {/* Right Panel: Interactive Data Pipeline & Terminal Logs */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="lg:w-6/12 w-full flex flex-col gap-6"
                >
                    {/* Panel 1: Data Architecture flow diagram */}
                    <div className="cyber-panel-glass p-5 rounded relative overflow-hidden flex flex-col gap-4 border border-cyber-blue/20 bg-black/35">
                        <div className="flex items-center gap-2 border-b border-white/10 pb-3">
                            <Workflow className="w-4 h-4 text-cyber-blue animate-pulse" />
                            <span className="font-mono text-xs text-cyber-blue uppercase font-bold tracking-widest">Active_Pipeline_Topology</span>
                        </div>

                        {/* Interactive flow SVG */}
                        <div className="w-full h-36 flex items-center justify-center bg-black/40 border border-white/5 rounded p-2">
                            <svg viewBox="0 0 480 120" className="w-full h-full select-none">
                                {/* Defs for gradients */}
                                <defs>
                                    <linearGradient id="cyber-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#00f0ff" />
                                        <stop offset="100%" stopColor="#7000ff" />
                                    </linearGradient>
                                </defs>

                                {/* Pipeline connections */}
                                <line x1="90" y1="60" x2="200" y2="60" stroke="#00f0ff" strokeWidth="1.5" className="animated-pipe opacity-70" />
                                <line x1="260" y1="60" x2="370" y2="60" stroke="#7000ff" strokeWidth="1.5" className="animated-pipe opacity-70" />

                                {/* Flow Nodes */}
                                {/* Source Node */}
                                <g transform="translate(20, 30)">
                                    <rect x="0" y="0" width="70" height="60" rx="4" fill="#0f0f0f" stroke="rgba(0, 240, 255, 0.3)" strokeWidth="1" />
                                    <text x="35" y="24" fill="#888" fontSize="8" fontFamily="monospace" textAnchor="middle">DATA</text>
                                    <text x="35" y="38" fill="#00f0ff" fontSize="10" fontWeight="bold" fontFamily="monospace" textAnchor="middle">SOURCES</text>
                                    <circle cx="35" cy="50" r="2.5" fill="#00f0ff" className="animate-ping" />
                                </g>

                                {/* Spark transform Node */}
                                <g transform="translate(200, 30)">
                                    <rect x="0" y="0" width="60" height="60" rx="4" fill="#0f0f0f" stroke="rgba(0, 240, 255, 0.5)" strokeWidth="1.5" />
                                    <text x="30" y="22" fill="#888" fontSize="8" fontFamily="monospace" textAnchor="middle">SPARK</text>
                                    <text x="30" y="36" fill="#fff" fontSize="11" fontWeight="bold" fontFamily="monospace" textAnchor="middle">ETL</text>
                                    <text x="30" y="48" fill="#ffb000" fontSize="8" fontFamily="monospace" textAnchor="middle">ACTIVE</text>
                                </g>

                                {/* Model / ML Vector Node */}
                                <g transform="translate(370, 30)">
                                    <rect x="0" y="0" width="90" height="60" rx="4" fill="#0f0f0f" stroke="rgba(112, 0, 255, 0.4)" strokeWidth="1" />
                                    <text x="45" y="24" fill="#888" fontSize="8" fontFamily="monospace" textAnchor="middle">AI MODELS</text>
                                    <text x="45" y="38" fill="#7000ff" fontSize="10" fontWeight="bold" fontFamily="monospace" textAnchor="middle">VECTOR_DB</text>
                                    <circle cx="80" cy="12" r="3" fill="#7000ff" />
                                </g>
                            </svg>
                        </div>
                    </div>

                    {/* Panel 2: Real-time Terminal Log Console */}
                    <div className="cyber-panel-glass p-5 rounded relative overflow-hidden flex flex-col gap-3 border border-cyber-blue/20 bg-black/45">
                        <div className="flex items-center justify-between border-b border-white/10 pb-3">
                            <div className="flex items-center gap-2">
                                <Server className="w-4 h-4 text-cyber-blue" />
                                <span className="font-mono text-xs text-white font-bold tracking-widest">Syslog_Stream //</span>
                            </div>
                            <span className="font-mono text-[9px] text-gray-500 uppercase flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping"></span>
                                Live_Pipeline_Run
                            </span>
                        </div>

                        {/* Terminal Box */}
                        <div className="w-full h-44 bg-black/70 border border-white/5 rounded p-4 font-mono text-[10px] sm:text-xs overflow-y-auto space-y-2 text-gray-400 select-all scrollbar-thin scrollbar-thumb-white/10">
                            {logs.map((log, index) => {
                                // Extract template to colorize
                                const isIngest = log.includes("[INGEST]");
                                const isSpark = log.includes("[SPARK]");
                                const isTransform = log.includes("[TRANSFORM]");
                                const isStore = log.includes("[STORE]");
                                const isTrain = log.includes("[TRAIN]");
                                const isVector = log.includes("[VECTOR]");
                                const isPipeline = log.includes("[PIPELINE]");

                                let colorClass = "text-gray-400";
                                if (isIngest) colorClass = "text-cyan-400";
                                else if (isSpark) colorClass = "text-amber-400";
                                else if (isTransform) colorClass = "text-purple-400";
                                else if (isStore) colorClass = "text-emerald-400";
                                else if (isTrain) colorClass = "text-fuchsia-400";
                                else if (isVector) colorClass = "text-pink-400";
                                else if (isPipeline) colorClass = "text-emerald-300 font-semibold";

                                return (
                                    <div key={index} className="leading-5">
                                        <span className="text-gray-600 mr-2">{log.substring(0, 10)}</span>
                                        <span className={colorClass}>{log.substring(10)}</span>
                                    </div>
                                );
                            })}
                            <div ref={terminalEndRef} />
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}