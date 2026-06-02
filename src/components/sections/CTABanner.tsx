"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CTABanner() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-maroon-900 via-maroon-800 to-navy-900" />
      <div className="absolute inset-0 bg-mesh opacity-15" />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`, backgroundSize: "40px 40px" }} />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
            Ready to Shape the Future<br />of Electronics?
          </h2>
          <p className="text-white/65 text-lg mb-10 leading-relaxed">
            Join one of India&apos;s most prestigious Electronics &amp; Communication departments.
            Explore research programs, faculty opportunities, and student life at GCT Coimbatore.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }}>
              <Link href="/admissions"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-maroon-900 text-sm font-bold transition-all duration-200 shadow-xl hover:shadow-2xl">
                Apply for MS / PhD <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }}>
              <Link href="/faculty"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/25 hover:border-white/50 text-white text-sm font-semibold transition-all duration-200 backdrop-blur-sm">
                Meet Our Faculty
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }}>
              <Link href="/labs"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/25 hover:border-white/50 text-white text-sm font-semibold transition-all duration-200 backdrop-blur-sm">
                Explore Research Labs
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
