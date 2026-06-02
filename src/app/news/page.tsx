import type { Metadata } from "next";
import { newsItems } from "@/data/index";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "News & Announcements | ECE GCT Coimbatore",
  description: "Latest news, announcements, faculty awards, and department updates from the ECE Department at GCT Coimbatore.",
};

const allCategories = ["All", "Award", "Admission", "Research", "Faculty", "Honor"];

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 bg-mesh opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-white/40 mb-8">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/70">News</span>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-maroon-800/20 border border-maroon-600/30 mb-6">
            <span className="w-2 h-2 rounded-full bg-maroon-500 animate-pulse" />
            <span className="text-sm text-maroon-300 font-medium">Latest Updates from the Department</span>
          </div>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-white leading-tight mb-4">
            News &amp; <span className="text-gradient">Spotlight</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl">
            Faculty awards, student achievements, research milestones, and departmental announcements.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsItems.map((item) => (
              <Link key={item.id} href={item.link}
                className="group relative rounded-2xl p-6 border border-border hover:border-transparent hover:shadow-card-hover transition-all duration-300 bg-background dark:bg-navy-900/30 overflow-hidden flex flex-col">
                <div className="absolute top-0 left-6 right-6 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: item.badgeColor }} />
                <div className="flex items-start justify-between gap-3 mb-3">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold text-white"
                    style={{ backgroundColor: item.badgeColor }}>{item.badge}</span>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />{item.date}
                  </div>
                </div>
                <h3 className="text-sm font-bold text-foreground mb-2 leading-snug font-serif group-hover:text-maroon-700 dark:group-hover:text-maroon-400 transition-colors flex-1">
                  {item.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">{item.description}</p>
                <div className="flex items-center gap-1.5 text-xs font-medium" style={{ color: item.badgeColor }}>
                  Read More <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
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
