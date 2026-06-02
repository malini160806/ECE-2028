"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { Menu, X, Sun, Moon, Search, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "About", href: "/about" },
  {
    label: "Academics",
    href: "/programs",
    mega: [
      { label: "B.E. Program", href: "/programs/be", desc: "4-year undergraduate program" },
      { label: "M.E. Program", href: "/programs/me", desc: "2-year postgraduate program" },
      { label: "Courses Offered", href: "/courses", desc: "Full course catalog" },
      { label: "Computing Facility", href: "/labs/dcf", desc: "State-of-the-art infrastructure" },
    ],
  },
  { label: "Faculty", href: "/faculty" },
  {
    label: "Research",
    href: "/research",
    mega: [
      { label: "Signal Processing", href: "/research/signal-processing", desc: "Audio, image & biomedical signals" },
      { label: "Communications & Networks", href: "/research/communications", desc: "5G/6G & wireless systems" },
      { label: "VLSI & Embedded Systems", href: "/research/vlsi", desc: "Chip design & FPGA" },
      { label: "Photonics & Quantum", href: "/research/photonics", desc: "Fiber optics & quantum comms" },
      { label: "RF & Microwave", href: "/research/rf-microwave", desc: "Antenna & radar systems" },
      { label: "Control & Instrumentation", href: "/research/control-systems", desc: "Robotics & sensors" },
    ],
  },
  {
    label: "Labs",
    href: "/labs",
    mega: [
      { label: "Wireless Research Lab", href: "/labs/wireless", desc: "5G/6G communications" },
      { label: "VLSI Design Lab", href: "/labs/vlsi", desc: "Chip design & FPGA" },
      { label: "Photonics & Quantum Lab", href: "/labs/photonics", desc: "Fiber optics & quantum" },
      { label: "DSP Laboratory", href: "/labs/dsp", desc: "Digital signal processing" },
      { label: "RF & Microwave Lab", href: "/labs/rf", desc: "Antenna & RF circuits" },
      { label: "Control & Robotics Lab", href: "/labs/control", desc: "Control systems & robotics" },
    ],
  },
  { label: "Placements", href: "/placements" },
  { label: "News", href: "/news" },
  {
    label: "Join Us",
    href: "/join",
    mega: [
      { label: "PG Admissions", href: "/admissions", desc: "Apply for postgraduate programs" },
      { label: "Faculty Positions", href: "/join/faculty", desc: "Open faculty roles" },
      { label: "Post Doctoral Fellow", href: "/join/postdoc", desc: "PostDoc opportunities" },
      { label: "Research Scholar", href: "/join/research-scholar", desc: "Scholar positions" },
      { label: "Student Opportunities", href: "/join/students", desc: "Student roles" },
      { label: "Part-Time Roles", href: "/join/part-time", desc: "Flexible opportunities" },
    ],
  },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
      if (e.key === "Escape") {
        setSearchOpen(false);
        setMobileOpen(false);
        setActiveMega(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const handleMegaEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMega(label);
  };

  const handleMegaLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveMega(null), 150);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "glass-light shadow-lg border-b border-black/5 dark:border-white/5"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-maroon-800 to-maroon-600 flex items-center justify-center shadow-md group-hover:shadow-maroon-glow transition-all duration-300">
                  <span className="text-white font-bold text-sm font-serif">GCT</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gold-500 rounded-full border-2 border-white dark:border-navy-900" />
              </div>
              <div className="hidden sm:block">
                <div className="text-sm font-bold leading-tight" style={{ color: scrolled ? undefined : "white" }}>
                  Dept. of ECE
                </div>
                <div className="text-xs" style={{ color: scrolled ? undefined : "rgba(255,255,255,0.6)" }}>GCT Coimbatore</div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-0.5">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.mega && handleMegaEnter(item.label)}
                  onMouseLeave={handleMegaLeave}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                      scrolled
                        ? "text-foreground/80 hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5"
                        : "text-white/80 hover:text-white hover:bg-white/8"
                    )}
                  >
                    {item.label}
                    {item.mega && (
                      <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-200", activeMega === item.label ? "rotate-180" : "")} />
                    )}
                  </Link>

                  <AnimatePresence>
                    {item.mega && activeMega === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.97 }}
                        transition={{ duration: 0.18 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 glass-light rounded-2xl shadow-card-hover border border-black/8 dark:border-white/10 overflow-hidden"
                        onMouseEnter={() => handleMegaEnter(item.label)}
                        onMouseLeave={handleMegaLeave}
                      >
                        <div className="p-2">
                          {item.mega.map((sub) => (
                            <Link
                              key={sub.label}
                              href={sub.href}
                              className="flex items-start gap-3 p-3 rounded-xl hover:bg-maroon-800/8 dark:hover:bg-maroon-800/20 transition-colors group/item"
                            >
                              <div className="flex-1 min-w-0">
                                <span className="text-sm font-medium text-foreground group-hover/item:text-maroon-800 dark:group-hover/item:text-maroon-400 transition-colors block">
                                  {sub.label}
                                </span>
                                <p className="text-xs text-muted-foreground mt-0.5">{sub.desc}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSearchOpen(true)}
                className={cn(
                  "hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm transition-all duration-200",
                  scrolled
                    ? "text-muted-foreground hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5"
                    : "text-white/60 hover:text-white hover:bg-white/8"
                )}
              >
                <Search className="w-4 h-4" />
                <span className="hidden md:inline">Search</span>
                <kbd className="hidden md:inline-flex items-center px-1.5 py-0.5 text-xs bg-white/10 rounded font-mono">
                  Ctrl K
                </kbd>
              </button>

              {mounted && (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className={cn(
                    "p-2 rounded-lg transition-all duration-200",
                    scrolled
                      ? "text-muted-foreground hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5"
                      : "text-white/70 hover:text-white hover:bg-white/8"
                  )}
                  aria-label="Toggle theme"
                >
                  <AnimatePresence mode="wait">
                    {theme === "dark" ? (
                      <motion.div key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                        <Sun className="w-[18px] h-[18px]" />
                      </motion.div>
                    ) : (
                      <motion.div key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                        <Moon className="w-[18px] h-[18px]" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              )}

              <Link
                href="/admissions"
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-maroon-800 hover:bg-maroon-700 text-white text-sm font-medium transition-all duration-200 shadow-sm hover:shadow-maroon-glow"
              >
                Apply Now
              </Link>

              <button
                onClick={() => setMobileOpen(true)}
                className={cn(
                  "lg:hidden p-2 rounded-lg transition-colors",
                  scrolled ? "text-foreground hover:bg-black/5 dark:hover:bg-white/5" : "text-white hover:bg-white/8"
                )}
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-[70] w-80 glass-light border-l border-black/8 dark:border-white/10 shadow-2xl overflow-y-auto"
            >
              <div className="flex items-center justify-between p-4 border-b border-black/5 dark:border-white/5">
                <span className="font-bold text-foreground">Menu</span>
                <button onClick={() => setMobileOpen(false)} className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-4 space-y-0.5">
                {navItems.map((item) => (
                  <div key={item.label}>
                    <div className="flex items-center">
                      <Link href={item.href} onClick={() => setMobileOpen(false)}
                        className="flex-1 px-4 py-3 rounded-xl text-sm font-medium text-foreground hover:bg-maroon-800/10 dark:hover:bg-maroon-800/20 transition-colors">
                        {item.label}
                      </Link>
                      {item.mega && (
                        <button onClick={() => setExpandedMobile(expandedMobile === item.label ? null : item.label)}
                          className="p-3 rounded-xl hover:bg-maroon-800/10 transition-colors">
                          <ChevronDown className={cn("w-4 h-4 transition-transform", expandedMobile === item.label ? "rotate-180" : "")} />
                        </button>
                      )}
                    </div>
                    <AnimatePresence>
                      {item.mega && expandedMobile === item.label && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden pl-4">
                          {item.mega.map((sub) => (
                            <Link key={sub.label} href={sub.href} onClick={() => setMobileOpen(false)}
                              className="block px-4 py-2 rounded-lg text-xs text-muted-foreground hover:text-maroon-700 dark:hover:text-maroon-400 transition-colors">
                              {sub.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
                <div className="pt-4 border-t border-black/5 dark:border-white/5 mt-2">
                  <Link href="/admissions" onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-center w-full px-4 py-3 rounded-xl bg-maroon-800 hover:bg-maroon-700 text-white text-sm font-semibold transition-colors">
                    Apply Now
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Search Modal */}
      <AnimatePresence>
        {searchOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-[80] bg-black/60 backdrop-blur-sm"
              onClick={() => setSearchOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2 }}
              className="fixed top-20 left-1/2 -translate-x-1/2 z-[90] w-full max-w-xl px-4"
            >
              <div className="glass-light rounded-2xl shadow-2xl border border-black/8 dark:border-white/10 overflow-hidden">
                <div className="flex items-center gap-3 p-4 border-b border-black/5 dark:border-white/5">
                  <Search className="w-5 h-5 text-muted-foreground" />
                  <input autoFocus type="text" placeholder="Search faculty, courses, research areas..."
                    value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground outline-none text-sm"
                  />
                  <button onClick={() => setSearchOpen(false)}>
                    <kbd className="px-2 py-1 text-xs bg-muted rounded border border-border font-mono text-muted-foreground">ESC</kbd>
                  </button>
                </div>
                <div className="p-6 text-center">
                  <Search className="w-8 h-8 text-muted-foreground mx-auto mb-2 opacity-40" />
                  <p className="text-sm text-muted-foreground">Type to search across faculty, research areas, courses &amp; more</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
