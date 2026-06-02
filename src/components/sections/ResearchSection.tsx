"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { staggerContainer, fadeInUp } from "@/lib/utils";
import { researchAreas } from "@/data/index";
import { BarChart3, Cpu, Zap, Wifi, Settings, Radio, ArrowRight, Users, FileText } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string, style?: React.CSSProperties }>> = {
  BarChart3, Cpu, Zap, Wifi, Settings, Radio,
};

export function ResearchSection() {
  return (
    <section id="research" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <SectionHeader
            eyebrow="Research Excellence"
            title="Frontier Research Across ECE Domains"
            subtitle="World-class research spanning signal processing, communications, VLSI, photonics, RF systems, and control engineering."
          />
          <motion.div whileHover={{ scale: 1.03 }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <Link href="/research"
              className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border hover:border-maroon-600/40 text-sm font-medium text-foreground transition-all duration-200">
              All Research Areas <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchAreas.map((area, i) => {
            const Icon = iconMap[area.icon];
            return (
              <motion.div key={area.id} variants={fadeInUp} custom={i} whileHover={{ y: -6 }}>
                <Link href={area.link}
                  className="group relative rounded-2xl p-6 border border-border hover:border-transparent transition-all duration-300 bg-background dark:bg-navy-900/30 hover:shadow-card-hover overflow-hidden cursor-pointer block">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl"
                    style={{ background: `radial-gradient(circle at 30% 30%, ${area.color}, transparent 70%)` }} />
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${area.color}18` }}>
                    {Icon && <Icon className="w-6 h-6" style={{ color: area.color }} />}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 font-serif group-hover:text-maroon-700 dark:group-hover:text-maroon-400 transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">{area.description}</p>
                  <div className="flex items-center gap-4 pt-4 border-t border-border">
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Users className="w-3.5 h-3.5" /><span>{area.faculty} Faculty</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <FileText className="w-3.5 h-3.5" /><span>{area.papers} Papers</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground ml-auto group-hover:translate-x-1 group-hover:text-maroon-600 transition-all duration-200" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
