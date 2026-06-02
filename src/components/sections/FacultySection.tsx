"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { staggerContainer, fadeInUp } from "@/lib/utils";
import { faculty } from "@/data/faculty";
import { Mail, ArrowRight, ExternalLink } from "lucide-react";

export function FacultySection() {
  return (
    <section id="faculty" className="section-padding bg-muted/30 dark:bg-navy-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <SectionHeader
            eyebrow="Faculty Spotlight"
            title="World-Class Faculty"
            subtitle="Our faculty are internationally recognized researchers and award-winning educators shaping the next generation of electronics engineers."
          />
          <motion.a
            href="https://ece.gct.ac.in/outerfaculty.php"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border hover:border-maroon-600/40 text-sm font-medium text-foreground transition-all duration-200"
          >
            All Faculty
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {faculty.map((member, i) => (
            <motion.div
              key={member.id}
              variants={fadeInUp}
              custom={i}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl overflow-hidden border border-border hover:border-transparent hover:shadow-card-hover transition-all duration-300 bg-background dark:bg-navy-900/40"
            >
              {/* Avatar area */}
              <div
                className="relative h-32 flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${member.color}22, ${member.color}08)`,
                }}
              >
                {/* Large initials avatar */}
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center text-white font-bold text-2xl font-serif shadow-lg transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundColor: member.color }}
                >
                  {member.initials}
                </div>
                {/* Decoration dots */}
                <div
                  className="absolute top-3 right-3 w-2 h-2 rounded-full opacity-40"
                  style={{ backgroundColor: member.color }}
                />
                <div
                  className="absolute bottom-3 left-3 w-1.5 h-1.5 rounded-full opacity-25"
                  style={{ backgroundColor: member.color }}
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-bold text-foreground text-sm leading-tight mb-1 group-hover:text-maroon-700 dark:group-hover:text-maroon-400 transition-colors font-serif">
                  {member.name}
                </h3>
                <p className="text-xs text-muted-foreground mb-3">{member.designation}</p>

                {/* Research tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {member.researchAreas.slice(0, 2).map((area) => (
                    <span
                      key={area}
                      className="px-2 py-0.5 rounded-full text-xs font-medium"
                      style={{
                        backgroundColor: `${member.color}15`,
                        color: member.color,
                      }}
                    >
                      {area}
                    </span>
                  ))}
                  {member.researchAreas.length > 2 && (
                    <span className="px-2 py-0.5 rounded-full text-xs text-muted-foreground bg-muted">
                      +{member.researchAreas.length - 2}
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 pt-3 border-t border-border">
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Email</span>
                  </a>
                  <a
                    href={member.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto flex items-center gap-1 text-xs font-medium transition-colors"
                    style={{ color: member.color }}
                  >
                    Profile
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 text-center"
        >
          <p className="text-muted-foreground text-sm mb-4">
            Explore all 60+ faculty members with their research profiles, publications, and lab affiliations.
          </p>
          <a
            href="https://ece.gct.ac.in/outerfaculty.php"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-maroon-800 hover:bg-maroon-700 text-white text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow-maroon-glow"
          >
            View Full Faculty Directory
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
