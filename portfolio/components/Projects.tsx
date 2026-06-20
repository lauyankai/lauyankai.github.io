"use client";
import { motion } from "framer-motion";
import { Database, Cpu, Gamepad2, HeartPulse } from "lucide-react";

const projects = [
    {
        title: "CON//TEXT",
        type: "Cybersecurity Sandbox",
        description: "A social engineering sandbox built for cybersecurity education, featuring multi-track logic achievements.",
        tech: ["Next.js", "Python", "AI"],
        icon: <Cpu className="w-6 h-6 text-cyber-blue" />
    },
    {
        title: "L'Oréal NLP Pipeline",
        type: "Data Engineering",
        description: "End-to-end NLP pipeline for classifying and clustering user comments, deployed with a Streamlit dashboard.",
        tech: ["Python", "Pandas", "Streamlit"],
        icon: <Database className="w-6 h-6 text-cyber-blue" />
    },
    {
        title: "Educational Simulations",
        type: "Interactive Pedagogy",
        description: "React/HTML mobile simulations for STEM. Includes a logarithm simulation featuring integrated dynamic teacher's notes on every screen.",
        tech: ["React", "HTML/CSS", "JavaScript"],
        icon: <Gamepad2 className="w-6 h-6 text-cyber-blue" />
    },
    {
        title: "Ultimate AIoT Hackathon 2025",
        type: "Hardware & Logistics",
        description: "Technical facilitator and managed critical data entry during the hackathon, guiding CDIO prototype development.",
        tech: ["IoT", "Data Entry", "Hardware"],
        icon: <Cpu className="w-6 h-6 text-cyber-blue" />
    },
    {
        title: "Emergency Response Simulator",
        type: "Simulation Tech",
        description: "Interactive AED training module tailored for Malaysian standards, with emergency protocol dialing configured to 999.",
        tech: ["React", "State Management"],
        icon: <HeartPulse className="w-6 h-6 text-cyber-blue" />
    }
];

export default function Projects() {
    return (
        <section className="py-24 bg-cyber-dark relative z-20">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-5xl font-bold mb-16 font-mono border-l-4 border-cyber-blue pl-4">
                    <span className="text-cyber-blue">01.</span> Data_Logs
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -10 }}
                            className="bg-cyber-gray p-8 border border-white/10 hover:border-cyber-blue/50 transition-colors group cursor-pointer"
                        >
                            <div className="mb-6 bg-black/50 w-12 h-12 flex items-center justify-center rounded group-hover:scale-110 transition-transform">
                                {project.icon}
                            </div>
                            <p className="text-cyber-purple font-mono text-xs mb-2">{project.type}</p>
                            <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech, i) => (
                                    <span key={i} className="text-xs font-mono bg-black/50 px-2 py-1 text-gray-300">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}