import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-cyber-dark selection:bg-cyber-blue selection:text-black">
      <Hero />
      <Projects />
      {/* You can add further components like <Experience /> or <Contact /> here */}
    </main>
  );
}