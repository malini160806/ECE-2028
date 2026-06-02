"use client";

import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-hero-gradient opacity-40" />
      <div className="absolute inset-0 bg-mesh opacity-10" />

      <div className="relative text-center max-w-lg">
        {/* Big 404 */}
        <div className="text-[10rem] font-bold font-serif leading-none text-gradient opacity-20 select-none mb-0">
          404
        </div>
        <div className="-mt-6 mb-6">
          <h1 className="font-serif text-4xl font-bold text-foreground mb-3">Page Not Found</h1>
          <p className="text-muted-foreground text-base leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist yet — we&apos;re still building it out. Head back to the homepage to explore the department.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-maroon-800 hover:bg-maroon-700 text-white text-sm font-semibold transition-all duration-200 shadow-maroon-glow hover:shadow-lg">
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          <button onClick={() => history.back()}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border hover:border-maroon-600/40 text-foreground text-sm font-medium transition-all duration-200">
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>
        </div>

        {/* Quick links */}
        <div className="mt-10 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground mb-4 uppercase tracking-widest">Quick Links</p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { label: "Faculty", href: "/faculty" },
              { label: "Research", href: "/research" },
              { label: "Programs", href: "/programs" },
              { label: "Placements", href: "/placements" },
              { label: "Admissions", href: "/admissions" },
              { label: "News", href: "/news" },
            ].map((link) => (
              <Link key={link.label} href={link.href}
                className="px-3 py-1.5 rounded-lg text-xs text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
