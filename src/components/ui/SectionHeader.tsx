"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/utils";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = false,
  light = false,
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={cn(
        "max-w-2xl",
        centered && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <div className={cn(
          "inline-flex items-center gap-2 mb-3",
        )}>
          <div className="h-px w-8 bg-maroon-600" />
          <span className={cn(
            "text-xs font-semibold tracking-widest uppercase",
            light ? "text-maroon-400" : "text-maroon-700 dark:text-maroon-400",
          )}>
            {eyebrow}
          </span>
          <div className="h-px w-8 bg-maroon-600" />
        </div>
      )}
      <h2 className={cn(
        "font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight",
        light ? "text-white" : "text-foreground",
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          "mt-4 text-base sm:text-lg leading-relaxed",
          light ? "text-white/70" : "text-muted-foreground",
        )}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
