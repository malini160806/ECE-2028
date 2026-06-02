"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, GraduationCap, FlaskConical, BookOpen, Users } from "lucide-react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { stats } from "@/data/index";

const iconMap: Record<string, React.ComponentType<{ className?: string, style?: React.CSSProperties }>> = {
  Users, FlaskConical, BookOpen, GraduationCap,
};

export function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="absolute inset-0 bg-hero-gradient" />

      {/* Animated orbs */}
      <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-maroon-800/20 blur-3xl pointer-events-none" />
      <motion.div animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-navy-700/30 blur-3xl pointer-events-none" />
      <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }} transition={{ duration: 12, repeat: Infinity, delay: 4 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-maroon-900/10 blur-3xl pointer-events-none" />

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />

      <motion.div style={{ y, opacity }} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-maroon-800/20 border border-maroon-600/30 backdrop-blur-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-maroon-500 animate-pulse" />
            <span className="text-sm text-maroon-300 font-medium">GCT Coimbatore · NIRF Ranked #1 · 7 Consecutive Years</span>
          </motion.div>

          {/* Headline */}
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.05] tracking-tight mb-6">
            Department of<br />
            <span className="text-gradient">Electronics &amp;</span><br />
            <span className="text-white/90">Communication Engg.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}
            className="text-lg sm:text-xl text-white/60 max-w-2xl leading-relaxed mb-10">
            Pioneering research in communications, VLSI, photonics, signal processing, and RF systems since 1971.
            Shaping the future of electronics with world-class faculty, state-of-the-art labs, and exceptional students.
          </motion.p>

          {/* CTAs */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap gap-3 mb-16">
            {[
              { label: "Explore Programs", href: "/programs", primary: true },
              { label: "Our Faculty", href: "/faculty", primary: false },
              { label: "Research Areas", href: "/research", primary: false },
              { label: "Placements", href: "/placements", primary: false },
            ].map((btn) => (
              <motion.div key={btn.label} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link href={btn.href}
                  className={btn.primary
                    ? "inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-maroon-800 hover:bg-maroon-700 text-white font-semibold text-sm transition-all duration-200 shadow-maroon-glow hover:shadow-lg"
                    : "inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/8 hover:bg-white/14 border border-white/15 text-white font-medium text-sm transition-all duration-200 backdrop-blur-sm"
                  }>
                  {btn.label}
                  {btn.primary && <ArrowRight className="w-4 h-4" />}
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.55 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((stat) => {
              const Icon = iconMap[stat.icon];
              return (
                <motion.div key={stat.label} whileHover={{ scale: 1.03, y: -2 }}
                  className="glass rounded-2xl p-5 border border-white/8 hover:border-maroon-600/30 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    {Icon && <Icon className="w-4 h-4 text-maroon-400" />}
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold text-white font-serif">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs text-white/50 mt-1 leading-tight">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-white/30 tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1">
          <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
