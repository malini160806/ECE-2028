import type { Metadata } from "next";
import { faculty } from "@/data/faculty";
import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Faculty | ECE Department, GCT Coimbatore",
  description: "Meet the world-class faculty of the EC Department at GCT Coimbatore — researchers, educators, and award-winners.",
};

export default function FacultyPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 bg-mesh opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-white/40 mb-8">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/70">Faculty</span>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-maroon-800/20 border border-maroon-600/30 mb-6">
            <span className="w-2 h-2 rounded-full bg-maroon-500" />
            <span className="text-sm text-maroon-300 font-medium">13+ World-Class Researchers & Educators</span>
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-white leading-tight mb-4">
            Our <span className="text-gradient">Faculty</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl">
            Internationally recognized researchers, Padma Shri awardees, Bhatnagar Prize winners — our faculty are among the finest in India and the world.
          </p>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Filter row placeholder */}
          <div className="flex flex-wrap gap-2 mb-10">
            {["All", "AI & ML", "Theory", "Systems", "Security", "HPC", "Data Science"].map((tag, i) => (
              <span key={tag}
                className={`px-4 py-1.5 rounded-full text-sm font-medium cursor-default transition-colors ${i === 0 ? "bg-maroon-800 text-white" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}>
                {tag}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {faculty.map((member) => (
              <div key={member.id}
                className="group relative rounded-2xl overflow-hidden border border-border hover:border-transparent hover:shadow-card-hover transition-all duration-300 bg-background dark:bg-navy-900/40">

                {/* Avatar area */}
                <div className="relative h-36 flex items-center justify-center"
                  style={{ background: `linear-gradient(135deg, ${member.color}22, ${member.color}06)` }}>
                  <div className="w-20 h-20 rounded-2xl flex items-center justify-center text-white font-bold text-2xl font-serif shadow-lg transition-transform duration-300 group-hover:scale-105"
                    style={{ backgroundColor: member.color }}>
                    {member.initials}
                  </div>
                  <div className="absolute top-3 right-3 w-2 h-2 rounded-full opacity-40" style={{ backgroundColor: member.color }} />
                  <div className="absolute bottom-3 left-3 w-1.5 h-1.5 rounded-full opacity-25" style={{ backgroundColor: member.color }} />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-bold text-foreground text-sm leading-tight mb-1 font-serif group-hover:text-maroon-700 dark:group-hover:text-maroon-400 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-3">{member.designation}</p>

                  {/* Research tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {member.researchAreas.slice(0, 2).map((area) => (
                      <span key={area} className="px-2 py-0.5 rounded-full text-xs font-medium"
                        style={{ backgroundColor: `${member.color}15`, color: member.color }}>
                        {area}
                      </span>
                    ))}
                    {member.researchAreas.length > 2 && (
                      <span className="px-2 py-0.5 rounded-full text-xs text-muted-foreground bg-muted">
                        +{member.researchAreas.length - 2}
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 pt-3 border-t border-border">
                    <a href={`mailto:${member.email}`}
                      className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors">
                      <Mail className="w-3.5 h-3.5" />
                      Email
                    </a>
                    <Link href={member.profileUrl}
                      className="ml-auto flex items-center gap-1 text-xs font-semibold transition-colors"
                      style={{ color: member.color }}>
                      Profile
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* More faculty notice */}
          <div className="mt-10 p-8 rounded-2xl bg-gradient-to-r from-muted/60 to-muted/30 dark:from-navy-900/60 dark:to-navy-900/20 border border-border text-center">
            <div className="text-3xl font-bold font-serif text-foreground mb-1">60+</div>
            <p className="text-muted-foreground text-sm mb-1 font-medium">Faculty Members</p>
            <p className="text-xs text-muted-foreground">
              Showing 8 spotlight faculty. Full directory with publications and lab affiliations coming soon.
            </p>
          </div>
        </div>
      </section>

      {/* Research areas quick links */}
      <section className="py-12 bg-muted/30 dark:bg-navy-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Browse by Research Area</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { label: "AI & ML", href: "/research/ai-ml", color: "#8B1538" },
              { label: "Theory", href: "/research/theory", color: "#1a2744" },
              { label: "Systems", href: "/research/systems", color: "#2d6b2d" },
              { label: "Security", href: "/research/security", color: "#7B2D8B" },
              { label: "Data Science", href: "/research/data-science", color: "#8B5500" },
              { label: "HPC", href: "/research/hpc", color: "#1a6b6b" },
            ].map((area) => (
              <Link key={area.label} href={area.href}
                className="group flex items-center justify-center gap-2 p-4 rounded-xl border border-border hover:border-transparent hover:shadow-card text-center transition-all duration-200 bg-background dark:bg-navy-900/30">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: area.color }} />
                <span className="text-sm font-medium text-foreground group-hover:text-maroon-700 dark:group-hover:text-maroon-400 transition-colors">
                  {area.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}
