"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { staggerContainer, fadeInUp } from "@/lib/utils";
import { CheckCircle, Award, Globe, TrendingUp } from "lucide-react";

const milestones = [
  { year: "1971", event: "Department of Electrical Engineering established with a focus on communications and electronics" },
  { year: "1983", event: "Renamed as Department of Electronics & Communication Engineering" },
  { year: "1995", event: "VLSI Design and Embedded Systems specialization introduced" },
  { year: "2008", event: "Photonics and Quantum Communication research lab established" },
  { year: "2022", event: "GCT Coimbatore ranked #1 in NIRF for the 7th consecutive year" },
  { year: "2026", event: "55+ faculty, 18+ research labs, 400+ publications per year" },
];

const keyAchievements = [
  { icon: Award, text: "NIRF Ranked #1 Engineering Institute for 7 consecutive years" },
  { icon: Globe, text: "India's first 6G sub-terahertz testbed demonstrated by ECE research team" },
  { icon: TrendingUp, text: "IEEE, OSA, and national academy fellowships awarded to our faculty" },
  { icon: CheckCircle, text: "One of India's most-cited Electronics & Communication departments" },
];

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <SectionHeader
              eyebrow="About the Department"
              title="Advancing Electronics & Communication"
              subtitle="Global excellence and local relevance in research, teaching, and technology development — the guiding vision of GCT Coimbatore ECE since 1971."
            />
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
              className="mt-8 space-y-3">
              {keyAchievements.map((item) => (
                <motion.div key={item.text} variants={fadeInUp}
                  className="flex items-start gap-3 p-4 rounded-xl bg-muted/50 dark:bg-white/3 border border-border hover:border-maroon-600/30 transition-all duration-300 group">
                  <div className="w-8 h-8 rounded-lg bg-maroon-800/10 dark:bg-maroon-800/20 flex items-center justify-center shrink-0 group-hover:bg-maroon-800/20 transition-colors">
                    <item.icon className="w-4 h-4 text-maroon-700 dark:text-maroon-400" />
                  </div>
                  <p className="text-sm text-foreground/80 leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </motion.div>
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-8 flex gap-4">
              <Link href="/about"
                className="px-6 py-3 rounded-xl bg-maroon-800 hover:bg-maroon-700 text-white text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow-maroon-glow">
                Learn More
              </Link>
              <Link href="/faculty"
                className="px-6 py-3 rounded-xl border border-border hover:border-maroon-600/50 text-foreground text-sm font-medium transition-all duration-200">
                Meet the Faculty
              </Link>
            </motion.div>
          </div>

          {/* Right: Timeline */}
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-maroon-600 via-maroon-800/50 to-transparent" />
            <div className="space-y-6">
              {milestones.map((m, i) => (
                <motion.div key={m.year} variants={fadeInUp} custom={i} className="flex gap-6 pl-12 relative group">
                  <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-background border-2 border-maroon-700 flex items-center justify-center group-hover:border-maroon-500 group-hover:scale-110 transition-all duration-300">
                    <div className="w-2 h-2 rounded-full bg-maroon-600 group-hover:bg-maroon-500" />
                  </div>
                  <div className="flex-1 pb-6">
                    <div className="text-xs font-bold text-maroon-700 dark:text-maroon-400 mb-1 tracking-wider">{m.year}</div>
                    <div className="text-sm text-foreground/80 leading-relaxed">{m.event}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
