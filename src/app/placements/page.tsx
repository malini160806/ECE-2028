import type { Metadata } from "next";
import { PlacementsSection } from "@/components/sections/PlacementsSection";
import { placementStats, recruitingCompanies } from "@/data/index";
import { CTABanner } from "@/components/sections/CTABanner";
import Link from "next/link";
import { ArrowRight, TrendingUp, Building2, Users, Star, Briefcase, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Placements | ECE Department, GCT Coimbatore",
  description: "Explore placement statistics, recruiting companies, and career opportunities for GCT Coimbatore ECE graduates.",
};

const topOffers = [
  { company: "Jane Street", role: "Quantitative Trader", package: "₹3.67 Cr", type: "International" },
  { company: "Google", role: "Software Engineer", package: "₹55 LPA", type: "Domestic" },
  { company: "Optiver", role: "Software Developer", package: "₹1.8 Cr", type: "International" },
  { company: "Microsoft", role: "SDE II", package: "₹50 LPA", type: "Domestic" },
  { company: "DE Shaw", role: "Systems Analyst", package: "₹45 LPA", type: "Domestic" },
  { company: "Apple", role: "Software Engineer", package: "₹52 LPA", type: "Domestic" },
];

const placementProcess = [
  { step: "01", title: "Registration", desc: "Students register with the Placement Cell and upload their resumes.", icon: Users },
  { step: "02", title: "Pre-Placement Talks", desc: "Companies conduct PPTs to introduce roles, culture, and expectations.", icon: Building2 },
  { step: "03", title: "Aptitude & Tests", desc: "Online tests for shortlisting — aptitude, coding challenges, and domain rounds.", icon: Star },
  { step: "04", title: "Interviews", desc: "Multiple interview rounds — technical, system design, and HR.", icon: Briefcase },
  { step: "05", title: "Offers", desc: "Selected candidates receive offer letters and complete formalities.", icon: Award },
];

const stats2 = [
  { label: "B.Tech Avg CTC", value: "₹35 LPA", trend: "+12% YoY" },
  { label: "Highest Offer", value: "₹3.67 Cr", trend: "International" },
  { label: "Placement Rate", value: "98%", trend: "2025 Batch" },
  { label: "Companies", value: "150+", trend: "Every Year" },
  { label: "PPO Offers", value: "40%", trend: "Pre-Placement Offers" },
  { label: "Dream Offers", value: "65%", trend: "Package > ₹20 LPA" },
];

export default function PlacementsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Page Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 bg-mesh opacity-20" />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-white/40 mb-8">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/70">Placements</span>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-maroon-800/20 border border-maroon-600/30 mb-6">
            <TrendingUp className="w-4 h-4 text-maroon-400" />
            <span className="text-sm text-maroon-300 font-medium">Class of 2025 — Record Placements</span>
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Career<br /><span className="text-gradient">Excellence</span>
          </h1>
          <p className="text-lg text-white/60 max-w-2xl leading-relaxed mb-10">
            GCT Coimbatore ECE graduates are among the most sought-after in India and globally. Top technology firms, investment banks, and research labs recruit from our campus every year.
          </p>

          {/* Quick stat pills */}
          <div className="flex flex-wrap gap-3">
            {[
              { label: "98% Placed", color: "#8B1538" },
              { label: "₹3.67 Cr Highest", color: "#D4AF37" },
              { label: "150+ Companies", color: "#1a2744" },
              { label: "₹35 LPA Average", color: "#2d6b2d" },
            ].map((pill) => (
              <div key={pill.label} className="px-4 py-2 rounded-full text-white text-sm font-semibold border border-white/10 backdrop-blur-sm"
                style={{ backgroundColor: `${pill.color}30`, borderColor: `${pill.color}50` }}>
                {pill.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {stats2.map((stat, i) => (
              <div key={stat.label}
                className="relative rounded-2xl p-5 bg-background border border-border hover:border-maroon-600/30 transition-all duration-300 hover:shadow-card-hover text-center group overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 rounded-full bg-maroon-800/5 group-hover:bg-maroon-800/10 -translate-y-1/2 translate-x-1/2 transition-colors blur-xl" />
                <div className="text-2xl font-bold text-foreground font-serif mb-1">{stat.value}</div>
                <div className="text-xs font-semibold text-maroon-700 dark:text-maroon-400 mb-1">{stat.label}</div>
                <div className="text-xs text-muted-foreground">{stat.trend}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Offers Table */}
      <section className="py-16 bg-muted/30 dark:bg-navy-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-2">
              <div className="h-px w-8 bg-maroon-600" />
              <span className="text-xs font-semibold tracking-widest uppercase text-maroon-700 dark:text-maroon-400">Top Offers</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">Notable Placements</h2>
            <p className="text-muted-foreground mt-2">A snapshot of standout offers from the 2025 placement season.</p>
          </div>

          <div className="rounded-2xl border border-border overflow-hidden bg-background">
            {topOffers.map((offer, i) => (
              <div key={offer.company}
                className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-6 py-5 group hover:bg-muted/40 dark:hover:bg-white/2 transition-colors ${i !== topOffers.length - 1 ? "border-b border-border" : ""}`}>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-maroon-800/10 dark:bg-maroon-800/20 flex items-center justify-center shrink-0">
                    <span className="text-xs font-bold text-maroon-700 dark:text-maroon-400">{offer.company[0]}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground font-serif">{offer.company}</div>
                    <div className="text-sm text-muted-foreground">{offer.role}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 sm:gap-8">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${offer.type === "International" ? "bg-gold-500/15 text-gold-600 dark:text-gold-400" : "bg-maroon-800/10 text-maroon-700 dark:text-maroon-400"}`}>
                    {offer.type}
                  </span>
                  <div className="text-xl font-bold text-foreground font-serif">{offer.package}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruiting Companies */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-2">
              <div className="h-px w-8 bg-maroon-600" />
              <span className="text-xs font-semibold tracking-widest uppercase text-maroon-700 dark:text-maroon-400">Recruiters</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-2">Our Recruiting Partners</h2>
            <p className="text-muted-foreground">150+ companies — from global tech giants to top quant firms — recruit from GCT Coimbatore ECE every year.</p>
          </div>

          <div className="flex flex-wrap gap-3">
            {recruitingCompanies.map((company, i) => (
              <div key={company}
                className="px-4 py-2.5 rounded-xl bg-muted/60 dark:bg-white/5 border border-border hover:border-maroon-600/40 hover:bg-muted dark:hover:bg-white/8 text-sm font-medium text-foreground transition-all duration-200 cursor-default">
                {company}
              </div>
            ))}
            <div className="px-4 py-2.5 rounded-xl bg-maroon-800/10 border border-maroon-600/20 text-sm font-medium text-maroon-700 dark:text-maroon-400">
              + 130 more companies
            </div>
          </div>
        </div>
      </section>

      {/* Placement Process */}
      <section className="py-16 bg-muted/30 dark:bg-navy-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-2">
              <div className="h-px w-8 bg-maroon-600" />
              <span className="text-xs font-semibold tracking-widest uppercase text-maroon-700 dark:text-maroon-400">Process</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">Placement Process</h2>
            <p className="text-muted-foreground mt-2">A structured, transparent placement process designed to help students put their best foot forward.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {placementProcess.map((step, i) => (
              <div key={step.step}
                className="relative rounded-2xl p-6 bg-background border border-border hover:border-maroon-600/30 hover:shadow-card-hover transition-all duration-300 group">
                {i < placementProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-3 z-10">
                    <ArrowRight className="w-5 h-5 text-muted-foreground/40" />
                  </div>
                )}
                <div className="text-4xl font-bold text-maroon-800/15 dark:text-maroon-400/10 font-serif mb-3 group-hover:text-maroon-800/25 dark:group-hover:text-maroon-400/20 transition-colors">
                  {step.step}
                </div>
                <div className="w-10 h-10 rounded-xl bg-maroon-800/10 dark:bg-maroon-800/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <step.icon className="w-5 h-5 text-maroon-700 dark:text-maroon-400" />
                </div>
                <h3 className="font-bold text-foreground font-serif mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}
