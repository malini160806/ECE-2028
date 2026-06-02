"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { staggerContainer, scaleIn } from "@/lib/utils";
import { programs } from "@/data/index";
import { Clock, Users, ArrowRight, CheckCircle } from "lucide-react";

export function ProgramsSection() {
  return (
    <section id="programs" className="section-padding bg-muted/30 dark:bg-navy-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Academic Programs"
          title="Programs Offered"
          subtitle="World-class education across undergraduate, postgraduate and doctoral levels — designed to produce researchers, innovators, and industry leaders."
          centered
          className="mb-16"
        />
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, i) => (
            <motion.div key={program.id} variants={scaleIn} custom={i} whileHover={{ y: -8, scale: 1.01 }}
              className="relative group rounded-2xl overflow-hidden border border-border hover:border-transparent transition-all duration-400 bg-background dark:bg-navy-900/50 hover:shadow-card-hover">
              <div className="h-1.5 w-full transition-all duration-300 group-hover:h-2"
                style={{ background: `linear-gradient(90deg, ${program.color}, ${program.color}88)` }} />
              <div className="absolute top-8 right-6 w-20 h-20 rounded-full blur-2xl opacity-20 group-hover:opacity-35 transition-opacity duration-300"
                style={{ backgroundColor: program.color }} />
              <div className="p-6 relative">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4 text-white font-bold text-xl font-serif shadow-sm"
                  style={{ backgroundColor: program.color }}>
                  {program.id === "be" ? "BE" : program.id === "me" ? "ME" : program.id.toUpperCase()}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-0.5 font-serif">{program.title}</h3>
                <p className="text-xs text-muted-foreground mb-4">{program.subtitle}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{program.duration}</div>
                  <div className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5" />{program.seats}</div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{program.description}</p>
                <ul className="space-y-2 mb-6">
                  {program.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-xs text-foreground/70">
                      <CheckCircle className="w-3.5 h-3.5 shrink-0" style={{ color: program.color }} />
                      {h}
                    </li>
                  ))}
                </ul>
                <Link href={program.link}
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200 group/link"
                  style={{ color: program.color }}>
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
