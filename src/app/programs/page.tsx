import type { Metadata } from "next";
import { programs } from "@/data/index";
import Link from "next/link";
import { Clock, Users, CheckCircle, ArrowRight } from "lucide-react";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Programs | ECE Department, GCT Coimbatore",
  description: "Explore B.Tech, M.Tech, MS, and PhD programs at the ECE Department, GCT Coimbatore.",
};

export default function ProgramsPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 bg-mesh opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-white/40 mb-8">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/70">Programs</span>
          </div>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-white leading-tight mb-4">
            Academic <span className="text-gradient">Programs</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl">
            From undergraduate to doctoral — rigorous programs designed to produce researchers, innovators, and technology leaders.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program) => (
              <Link key={program.id} href={program.link}
                className="group relative rounded-2xl overflow-hidden border border-border hover:border-transparent hover:shadow-card-hover transition-all duration-300 bg-background dark:bg-navy-900/40 block">
                <div className="h-2" style={{ background: `linear-gradient(90deg, ${program.color}, ${program.color}60)` }} />
                <div className="p-8">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-white font-bold text-2xl font-serif shadow"
                      style={{ backgroundColor: program.color }}>
                      {program.id === "btech" ? "B" : program.id === "mtech" ? "M" : program.id === "ms" ? "MS" : "Ph"}
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:translate-x-1 group-hover:text-maroon-600 transition-all mt-2" />
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-1">{program.title}</h2>
                  <p className="text-sm text-muted-foreground mb-4">{program.subtitle}</p>
                  <div className="flex items-center gap-5 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{program.duration}</div>
                    <div className="flex items-center gap-1.5"><Users className="w-4 h-4" />{program.seats}</div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">{program.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {program.highlights.map((h) => (
                      <div key={h} className="flex items-center gap-2 text-xs text-foreground/70">
                        <CheckCircle className="w-3.5 h-3.5 shrink-0" style={{ color: program.color }} />{h}
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTABanner />
    </main>
  );
}
