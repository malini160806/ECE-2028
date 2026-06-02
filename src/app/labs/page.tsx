import type { Metadata } from "next";
import { labs } from "@/data/index";
import Link from "next/link";
import { Cpu, Shield, CheckCircle, Brain, Server, Database, ArrowRight } from "lucide-react";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Labs & Research Centers | ECE GCT Coimbatore",
  description: "State-of-the-art research laboratories and centers at GCT Coimbatore ECE department.",
};

const iconMap: Record<string, React.ComponentType<{ className?: string, style?: React.CSSProperties }>> = {
  Cpu, Shield, CheckCircle, Brain, Server, Database,
};

export default function LabsPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 bg-mesh opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-white/40 mb-8">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/70">Labs</span>
          </div>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-white leading-tight mb-4">
            Labs &amp; <span className="text-gradient">Research Centers</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl">
            State-of-the-art laboratories and research centres powering groundbreaking work across all areas of computer science.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {labs.map((lab) => {
              const Icon = iconMap[lab.icon];
              return (
                <Link key={lab.name} href={lab.url}
                  className="group relative rounded-2xl p-6 border border-border hover:border-transparent hover:shadow-card-hover transition-all duration-300 bg-background dark:bg-navy-900/30 overflow-hidden block">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-8 transition-opacity duration-500"
                    style={{ background: `radial-gradient(circle at 20% 20%, ${lab.color}, transparent 60%)` }} />
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${lab.color}18` }}>
                      {Icon && <Icon className="w-6 h-6" style={{ color: lab.color }} />}
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </div>
                  <div className="text-xs font-bold tracking-wider uppercase mb-1" style={{ color: lab.color }}>{lab.name}</div>
                  <h3 className="text-base font-bold text-foreground mb-3 font-serif group-hover:text-maroon-700 dark:group-hover:text-maroon-400 transition-colors">{lab.fullName}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{lab.description}</p>
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
