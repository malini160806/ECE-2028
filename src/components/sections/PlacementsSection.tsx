"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { staggerContainer, fadeInUp, scaleIn } from "@/lib/utils";
import { placementStats, recruitingCompanies } from "@/data/index";
import { TrendingUp, Building2, Users } from "lucide-react";

export function PlacementsSection() {
  return (
    <section id="placements" className="section-padding bg-muted/30 dark:bg-navy-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Placements & Industry"
          title="Career Excellence"
          subtitle="GCT Coimbatore ECE graduates are sought after by the world's top technology companies, research labs, and investment banks."
          centered
          className="mb-16"
        />

        {/* Stats dashboard */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14"
        >
          {placementStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={scaleIn}
              custom={i}
              whileHover={{ y: -4, scale: 1.02 }}
              className="relative rounded-2xl p-6 bg-background dark:bg-navy-900/50 border border-border hover:border-maroon-600/30 transition-all duration-300 hover:shadow-card-hover text-center group overflow-hidden"
            >
              {/* Background orb */}
              <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-maroon-800/5 group-hover:bg-maroon-800/10 -translate-y-1/2 translate-x-1/2 transition-colors blur-xl" />

              <div className="relative">
                <div className="text-3xl font-bold text-foreground font-serif mb-1">
                  {stat.value}
                </div>
                <div className="text-xs font-semibold text-maroon-700 dark:text-maroon-400 uppercase tracking-wider mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-muted-foreground">{stat.subtext}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Recruiting companies */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-border bg-background dark:bg-navy-900/30 p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Building2 className="w-5 h-5 text-maroon-700 dark:text-maroon-400" />
            <h3 className="text-lg font-bold text-foreground font-serif">Top Recruiting Partners</h3>
          </div>

          <div className="flex flex-wrap gap-3">
            {recruitingCompanies.map((company, i) => (
              <motion.div
                key={company}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                whileHover={{ scale: 1.06, y: -2 }}
                className="px-4 py-2 rounded-xl bg-muted dark:bg-white/5 border border-border hover:border-maroon-600/30 text-sm font-medium text-foreground transition-all duration-200 cursor-default"
              >
                {company}
              </motion.div>
            ))}
          </div>

          <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1.5">
            <TrendingUp className="w-3.5 h-3.5" />
            And 130+ more companies visit campus every year
          </p>
        </motion.div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-xl bg-maroon-800/8 dark:bg-maroon-800/15 border border-maroon-600/20"
        >
          <div className="flex items-center gap-3">
            <Users className="w-5 h-5 text-maroon-700 dark:text-maroon-400" />
            <p className="text-sm text-foreground/80">
              <span className="font-semibold text-foreground">Department Computing Facility</span> provides industry-grade computing resources to all students.
            </p>
          </div>
          <a
            href="https://dcf.ece.gct.ac.in"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-4 py-2 rounded-lg bg-maroon-800 hover:bg-maroon-700 text-white text-sm font-medium transition-colors"
          >
            Visit DCF
          </a>
        </motion.div>
      </div>
    </section>
  );
}
