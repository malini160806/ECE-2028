"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { staggerContainer, fadeInUp } from "@/lib/utils";
import { newsItems } from "@/data/index";
import { ArrowRight, ExternalLink, Calendar } from "lucide-react";

export function NewsSection() {
  return (
    <section id="news" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <SectionHeader
            eyebrow="News & Announcements"
            title="Department Spotlight"
            subtitle="Latest achievements, faculty recognitions, admissions updates, and research milestones."
          />
          <motion.a
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border hover:border-maroon-600/40 text-sm font-medium text-foreground transition-all duration-200"
          >
            All Updates
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {newsItems.map((item, i) => (
            <motion.a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeInUp}
              custom={i}
              whileHover={{ y: -5 }}
              className="group relative rounded-2xl p-6 border border-border hover:border-transparent hover:shadow-card-hover transition-all duration-300 bg-background dark:bg-navy-900/30 overflow-hidden flex flex-col"
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-6 right-6 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: item.badgeColor }}
              />

              {/* Header */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <span
                  className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold text-white"
                  style={{ backgroundColor: item.badgeColor }}
                >
                  {item.badge}
                </span>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="w-3 h-3" />
                  {item.date}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-sm font-bold text-foreground mb-2 leading-snug font-serif group-hover:text-maroon-700 dark:group-hover:text-maroon-400 transition-colors flex-1">
                {item.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                {item.description}
              </p>

              {/* Footer */}
              <div className="flex items-center gap-1.5 text-xs font-medium" style={{ color: item.badgeColor }}>
                Read More
                <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Announcements banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-maroon-800/10 to-maroon-900/5 border border-maroon-600/20 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div>
            <p className="text-sm font-semibold text-foreground mb-1">MS/PhD Admissions Open</p>
            <p className="text-xs text-muted-foreground">The selected candidate list for ECE admissions 2026 has been released.</p>
          </div>
          <a
            href="https://ece.gct.ac.in/admissions.php"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-5 py-2.5 rounded-xl bg-maroon-800 hover:bg-maroon-700 text-white text-sm font-semibold transition-all hover:shadow-maroon-glow"
          >
            View Admissions
          </a>
        </motion.div>
      </div>
    </section>
  );
}
