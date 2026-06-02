import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, GraduationCap, BookOpen, Calendar, Mail } from "lucide-react";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Admissions | ECE Department, GCT Coimbatore",
  description: "Apply for B.E. and M.E. programs at GCT Coimbatore ECE. Learn about eligibility, process, and placements.",
};

const admissionPrograms = [
  {
    title: "B.E. (Electronics & Communication)",
    duration: "4 Years",
    eligibility: "12th Standard with Physics, Chemistry, and Mathematics",
    intake: "Once a year (August)",
    fellowship: "Merit scholarships available",
    highlights: ["TNEA Counseling", "Industry Internships", "Core Placement", "State-of-art Labs"],
    color: "#8B1538",
    link: "/programs/be",
  },
  {
    title: "M.E. (Applied Electronics & VLSI)",
    duration: "2 Years",
    eligibility: "B.E. / B.Tech in relevant field",
    intake: "Once a year (August)",
    fellowship: "Stipend for GATE qualified candidates",
    highlights: ["TANCET / GATE Entry", "Industry Projects", "Advanced Labs", "Research Opportunities"],
    color: "#1a2744",
    link: "/programs/me",
  },
];

const steps = [
  { num: "01", title: "Check Eligibility", desc: "Review the eligibility criteria for the program you wish to apply for." },
  { num: "02", title: "Online Application", desc: "Fill out the online application form on the GCT Coimbatore admissions portal." },
  { num: "03", title: "Written Test", desc: "Appear for the written test held at GCT Coimbatore campus." },
  { num: "04", title: "Interview", desc: "Shortlisted candidates appear for a technical interview with faculty." },
  { num: "05", title: "Offer Letter", desc: "Selected candidates receive official offer letters with joining details." },
];

export default function AdmissionsPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 bg-mesh opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-white/40 mb-8">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/70">Admissions</span>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-maroon-800/20 border border-maroon-600/30 mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-maroon-300 font-medium">Applications Open — 2026 Batch</span>
          </div>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-white leading-tight mb-4">
            Join GCT Coimbatore <span className="text-gradient">ECE</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mb-8">
            Apply for our world-class B.E. and M.E. programs. Work with top faculty, access state-of-the-art labs, and receive excellent placement opportunities.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link href="#programs-offered"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-maroon-800 hover:bg-maroon-700 text-white font-semibold text-sm transition-all hover:shadow-maroon-glow">
              View Programs <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="mailto:ecedepartment@gct.ac.in"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 hover:border-white/40 text-white text-sm font-medium transition-all">
              <Mail className="w-4 h-4" /> Contact Admissions
            </a>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section id="programs-offered" className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-2">
              <div className="h-px w-8 bg-maroon-600" />
              <span className="text-xs font-semibold tracking-widest uppercase text-maroon-700 dark:text-maroon-400">Programs</span>
            </div>
            <h2 className="font-serif text-3xl font-bold text-foreground">Academic Programs</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {admissionPrograms.map((prog) => (
              <div key={prog.title} className="rounded-2xl border border-border bg-background dark:bg-navy-900/40 overflow-hidden">
                <div className="h-1.5" style={{ backgroundColor: prog.color }} />
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-bold text-lg font-serif" style={{ backgroundColor: prog.color }}>
                      <GraduationCap className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-bold text-foreground">{prog.title}</h3>
                      <p className="text-sm text-muted-foreground">Duration: {prog.duration}</p>
                    </div>
                  </div>
                  <div className="space-y-3 mb-5 text-sm">
                    <div className="flex items-start gap-2"><span className="text-muted-foreground w-24 shrink-0">Eligibility</span><span className="text-foreground">{prog.eligibility}</span></div>
                    <div className="flex items-start gap-2"><span className="text-muted-foreground w-24 shrink-0">Intake</span><span className="text-foreground">{prog.intake}</span></div>
                    <div className="flex items-start gap-2"><span className="text-muted-foreground w-24 shrink-0">Fellowship</span><span className="text-foreground font-medium">{prog.fellowship}</span></div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mb-5">
                    {prog.highlights.map((h) => (
                      <div key={h} className="flex items-center gap-2 text-xs text-foreground/70">
                        <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: prog.color }} />{h}
                      </div>
                    ))}
                  </div>
                  <Link href={prog.link}
                    className="inline-flex items-center gap-2 text-sm font-semibold transition-colors" style={{ color: prog.color }}>
                    Program Details <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-muted/30 dark:bg-navy-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-2">
              <div className="h-px w-8 bg-maroon-600" />
              <span className="text-xs font-semibold tracking-widest uppercase text-maroon-700 dark:text-maroon-400">Process</span>
            </div>
            <h2 className="font-serif text-3xl font-bold text-foreground">Admission Process</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {steps.map((step, i) => (
              <div key={step.num} className="relative rounded-2xl p-5 bg-background border border-border hover:border-maroon-600/30 transition-colors">
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-7 -right-3 z-10">
                    <ArrowRight className="w-5 h-5 text-muted-foreground/30" />
                  </div>
                )}
                <div className="text-3xl font-bold font-serif text-maroon-800/15 dark:text-maroon-400/10 mb-2">{step.num}</div>
                <h3 className="font-bold text-foreground text-sm font-serif mb-1">{step.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-background">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-3">Have Questions?</h2>
          <p className="text-muted-foreground mb-6">Contact the department office for any admission-related queries.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="mailto:ecedepartment@gct.ac.in"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-maroon-800 hover:bg-maroon-700 text-white text-sm font-semibold transition-all hover:shadow-maroon-glow">
              <Mail className="w-4 h-4" /> ecedepartment@gct.ac.in
            </a>
            <div className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-border text-foreground text-sm">
              <Calendar className="w-4 h-4 text-maroon-600" /> (+91) 7339686617
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
