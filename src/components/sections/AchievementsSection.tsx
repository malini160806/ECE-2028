"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { staggerContainer, fadeInUp, scaleIn } from "@/lib/utils";
import { achievements } from "@/data/index";
import { Trophy, Star, Award, Globe, Cpu, BookOpen } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string, style?: React.CSSProperties }>> = {
  Trophy, Star, Award, Globe, Cpu, BookOpen,
};

export function AchievementsSection() {
  return (
    <section id="achievements" className="section-padding relative overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950" />
      <div className="absolute inset-0 bg-mesh opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-maroon-600/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy-600/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Awards & Honors"
          title="Recognized Excellence"
          subtitle="Our faculty and students consistently earn India's and the world's most prestigious recognitions."
          centered
          light
          className="mb-16"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {achievements.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.title}
                variants={scaleIn}
                custom={i}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group glass rounded-2xl p-6 border border-white/8 hover:border-white/15 transition-all duration-300 hover:shadow-glass-hover"
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${item.color}25` }}
                >
                  {Icon && <Icon className="w-6 h-6" style={{ color: item.color }} />}
                </div>

                <h3 className="text-base font-bold text-white mb-2 font-serif leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-white/55 leading-relaxed">
                  {item.description}
                </p>

                {/* Bottom accent */}
                <div
                  className="h-0.5 w-0 group-hover:w-full mt-4 transition-all duration-500 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Dept spotlight CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <a
            href="https://ece.gct.ac.in/spotlight.php"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 hover:border-maroon-500/50 text-white text-sm font-medium transition-all duration-200 hover:bg-maroon-800/20"
          >
            View Department Spotlight
            <Trophy className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
