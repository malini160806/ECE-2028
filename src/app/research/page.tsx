import type { Metadata } from "next";
import { researchAreas } from "@/data/index";
import Link from "next/link";
import { Brain, Calculator, Server, Shield, BarChart3, Cpu, ArrowRight, Users, FileText } from "lucide-react";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Research | ECE Department, GCT Coimbatore",
  description: "Explore world-class research across communications, VLSI, photonics, signal processing, and RF systems at GCT Coimbatore ECE.",
};

const iconMap: Record<string, React.ComponentType<{ className?: string, style?: React.CSSProperties }>> = {
  Brain, Calculator, Server, Shield, BarChart3, Cpu,
};

const tracks = [
  { id: "A", name: "Theoretical Computer Science", desc: "Algorithms, complexity theory, combinatorics, cryptography, and the mathematical underpinnings of computation.", areas: ["Algorithms", "Complexity Theory", "Cryptography", "Combinatorics", "Logic"], href: "/research/theory", color: "#1a2744" },
  { id: "B", name: "Systems & Networking", desc: "Operating systems, distributed systems, computer architecture, networking, and cloud infrastructure.", areas: ["Operating Systems", "Distributed Systems", "Networks", "Architecture", "Cloud Computing"], href: "/research/systems", color: "#2d6b2d" },
  { id: "C", name: "AI / Machine Learning", desc: "Deep learning, computer vision, NLP, reinforcement learning, and intelligent autonomous systems.", areas: ["Deep Learning", "Computer Vision", "NLP", "RL", "Robotics"], href: "/research/ai-ml", color: "#8B1538" },
];

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 bg-mesh opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-white/40 mb-8">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/70">Research</span>
          </div>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-white leading-tight mb-4">
            Research <span className="text-gradient">Excellence</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl">
            Pioneering research across three broad tracks — theory, systems, and intelligent computing — with 500+ publications per year.
          </p>
        </div>
      </section>

      {/* Three Tracks */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-2">
              <div className="h-px w-8 bg-maroon-600" />
              <span className="text-xs font-semibold tracking-widest uppercase text-maroon-700 dark:text-maroon-400">Research Tracks</span>
            </div>
            <h2 className="font-serif text-3xl font-bold text-foreground">Three Core Research Tracks</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tracks.map((track) => (
              <Link key={track.id} href={track.href}
                className="group rounded-2xl p-6 border border-border hover:border-transparent hover:shadow-card-hover transition-all duration-300 bg-background dark:bg-navy-900/30 overflow-hidden block">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 font-bold text-lg font-serif text-white"
                  style={{ backgroundColor: track.color }}>
                  {track.id}
                </div>
                <h3 className="font-bold text-foreground font-serif mb-2 group-hover:text-maroon-700 dark:group-hover:text-maroon-400 transition-colors">{track.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{track.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {track.areas.map((a) => (
                    <span key={a} className="px-2 py-0.5 rounded-full text-xs" style={{ backgroundColor: `${track.color}12`, color: track.color }}>{a}</span>
                  ))}
                </div>
                <div className="flex items-center gap-1 text-sm font-medium" style={{ color: track.color }}>
                  Explore Track {track.id} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-16 bg-muted/30 dark:bg-navy-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-2">
              <div className="h-px w-8 bg-maroon-600" />
              <span className="text-xs font-semibold tracking-widest uppercase text-maroon-700 dark:text-maroon-400">Research Areas</span>
            </div>
            <h2 className="font-serif text-3xl font-bold text-foreground">All Research Areas</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {researchAreas.map((area) => {
              const Icon = iconMap[area.icon];
              return (
                <Link key={area.id} href={area.link}
                  className="group rounded-2xl p-5 border border-border hover:border-transparent hover:shadow-card-hover transition-all duration-300 bg-background dark:bg-navy-900/30 block">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: `${area.color}18` }}>
                      {Icon && <Icon className="w-5 h-5" style={{ color: area.color }} />}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-foreground text-sm font-serif mb-1 group-hover:text-maroon-700 dark:group-hover:text-maroon-400 transition-colors">{area.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed mb-3">{area.description}</p>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1"><Users className="w-3 h-3" />{area.faculty} Faculty</span>
                        <span className="flex items-center gap-1"><FileText className="w-3 h-3" />{area.papers} Papers</span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}
