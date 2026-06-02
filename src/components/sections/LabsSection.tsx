"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { staggerContainer, scaleIn } from "@/lib/utils";
import { labs } from "@/data/index";
import { BarChart3, Cpu, Zap, Wifi, Settings, Radio, ArrowRight } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string, style?: React.CSSProperties }>> = {
  BarChart3, Cpu, Zap, Wifi, Settings, Radio,
};

export function LabsSection() {
  return (
    <section id="labs" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <SectionHeader
            eyebrow="Research Infrastructure"
            title="Labs & Research Centres"
            subtitle="State-of-the-art laboratories driving innovation in wireless systems, VLSI, photonics, signal processing, and control engineering."
          />
          <motion.div whileHover={{ scale: 1.03 }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <Link href="/labs"
              className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border hover:border-maroon-600/40 text-sm font-medium text-foreground transition-all duration-200">
              All Labs <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {labs.map((lab, i) => {
            const Icon = iconMap[lab.icon];
            return (
              <motion.div key={lab.name} variants={scaleIn} custom={i} whileHover={{ y: -6, scale: 1.01 }}>
                <Link href={lab.url}
                  className="group relative rounded-2xl p-6 border border-border hover:border-transparent transition-all duration-300 bg-background dark:bg-navy-900/30 hover:shadow-card-hover overflow-hidden block h-full">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-8 transition-opacity duration-500"
                    style={{ background: `radial-gradient(circle at 20% 20%, ${lab.color}, transparent 60%)` }} />
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: `${lab.color}18` }}>
                      {Icon && <Icon className="w-6 h-6" style={{ color: lab.color }} />}
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                  </div>
                  <div className="text-xs font-bold tracking-wider uppercase mb-1" style={{ color: lab.color }}>{lab.name}</div>
                  <h3 className="text-base font-bold text-foreground mb-3 font-serif group-hover:text-maroon-700 dark:group-hover:text-maroon-400 transition-colors leading-snug">
                    {lab.fullName}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{lab.description}</p>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
