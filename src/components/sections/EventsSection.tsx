"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { staggerContainer, fadeInUp } from "@/lib/utils";
import { events } from "@/data/index";
import { Calendar, Clock, MapPin, ArrowRight, ExternalLink } from "lucide-react";

const typeColors: Record<string, string> = {
  Social: "#8B1538",
  Research: "#1a2744",
  Academic: "#2d4a8f",
  Exhibition: "#7B2D8B",
};

export function EventsSection() {
  return (
    <section id="events" className="section-padding bg-muted/30 dark:bg-navy-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <SectionHeader
            eyebrow="Events & Seminars"
            title="Upcoming Events"
            subtitle="Seminars, workshops, poster days, and student showcases — stay connected with the department."
          />
          <motion.a
            href="https://gct.gct.ac.in/deptevents.php"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border hover:border-maroon-600/40 text-sm font-medium text-foreground transition-all duration-200"
          >
            Full Calendar
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {events.map((event, i) => {
            const color = event.color || typeColors[event.type] || "#8B1538";
            return (
              <motion.a
                key={event.id}
                href={event.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeInUp}
                custom={i}
                whileHover={{ y: -4, scale: 1.01 }}
                className="group relative rounded-2xl overflow-hidden border border-border hover:border-transparent hover:shadow-card-hover transition-all duration-300 bg-background dark:bg-navy-900/40 flex"
              >
                {/* Left color bar */}
                <div className="w-1.5 shrink-0 transition-all duration-300 group-hover:w-2" style={{ backgroundColor: color }} />

                <div className="flex-1 p-6">
                  {/* Type badge + date */}
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span
                      className="px-2.5 py-0.5 rounded-full text-xs font-semibold text-white"
                      style={{ backgroundColor: color }}
                    >
                      {event.type}
                    </span>
                    <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <h3 className="text-base font-bold text-foreground mb-3 leading-snug font-serif group-hover:text-maroon-700 dark:group-hover:text-maroon-400 transition-colors">
                    {event.title}
                  </h3>

                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="w-3.5 h-3.5 shrink-0" style={{ color }} />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock className="w-3.5 h-3.5 shrink-0" style={{ color }} />
                      {event.time}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <MapPin className="w-3.5 h-3.5 shrink-0" style={{ color }} />
                      {event.location}
                    </div>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* ECE Bytes + Poster Day */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {[
            { name: "ECE Bytes", desc: "Read the department newsletter", href: "https://ece.gct.ac.in/ECEBytes.php", color: "#8B1538" },
            { name: "ECE ExeBit", desc: "Student project showcase", href: "https://ece.gct.ac.in/ECEExeBit.php", color: "#1a2744" },
          ].map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-4 p-5 rounded-xl bg-background dark:bg-navy-900/30 border border-border hover:border-maroon-600/30 transition-all duration-200 group"
            >
              <div>
                <div className="font-semibold text-foreground text-sm group-hover:text-maroon-700 dark:group-hover:text-maroon-400 transition-colors">{item.name}</div>
                <div className="text-xs text-muted-foreground">{item.desc}</div>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:translate-x-1 group-hover:text-maroon-600 transition-all" />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
