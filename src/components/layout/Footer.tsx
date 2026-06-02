import Link from "next/link";
import { Mail, Phone, MapPin, ExternalLink, Globe, Share2, Video, Code2 } from "lucide-react";

const footerLinks = {
  Academics: [
    { label: "B.E.", href: "/programs/be" },
    { label: "M.E.", href: "/programs/me" },
    { label: "Courses Offered", href: "/courses" },
  ],
  Research: [
    { label: "Signal Processing", href: "/research/signal-processing" },
    { label: "Communications & Networks", href: "/research/communications" },
    { label: "VLSI & Embedded", href: "/research/vlsi" },
    { label: "Photonics & Quantum", href: "/research/photonics" },
    { label: "RF & Microwave", href: "/research/rf-microwave" },
  ],
  "Quick Links": [
    { label: "Faculty Directory", href: "/faculty" },
    { label: "Research Labs", href: "/labs" },
    { label: "Events Calendar", href: "/events" },
    { label: "Department News", href: "/news" },
    { label: "Placements", href: "/placements" },
  ],
  "Join Us": [
    { label: "PG Admissions", href: "/admissions" },
    { label: "Faculty Positions", href: "/join/faculty" },
    { label: "Post Doctoral Fellow", href: "/join/postdoc" },
    { label: "Research Scholar", href: "/join/research-scholar" },
    { label: "Student Opportunities", href: "/join/students" },
  ],
};

export function Footer() {
  return (
    <footer className="text-white relative overflow-hidden" style={{ backgroundColor: "#080d1a" }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-maroon-600 to-transparent" />
      <div className="absolute inset-0 bg-mesh opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4 group w-fit">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-maroon-800 to-maroon-600 flex items-center justify-center">
                <span className="text-white font-bold font-serif">GCT</span>
              </div>
              <div>
                <div className="font-bold text-white text-sm leading-tight">
                  Dept. of Electronics &amp; Communication Engineering
                </div>
                <div className="text-xs text-white/60">GCT Coimbatore</div>
              </div>
            </Link>

            <p className="text-sm text-white/60 leading-relaxed mb-6">
              Established in 1971, the Department of ECE at GCT Coimbatore is committed to excellence in research and education across communications, VLSI, photonics, signal processing, and more.
            </p>

            <div className="space-y-2.5">
              <div className="flex items-start gap-2.5 text-xs text-white/60">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-maroon-500" />
                <span>GCT Coimbatore, Tamil Nadu – 641 013, India</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-white/60">
                <Phone className="w-4 h-4 shrink-0 text-maroon-500" />
                <span>Office: (+91) 44-22574400</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-white/60">
                <Mail className="w-4 h-4 shrink-0 text-maroon-500" />
                <a href="mailto:office@ece.gct.ac.in" className="hover:text-maroon-400 transition-colors">
                  office@ece.gct.ac.in
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-6">
              {[
                { icon: Globe, href: "/about", label: "Website" },
                { icon: Share2, href: "/news", label: "News" },
                { icon: Video, href: "/events", label: "Events" },
                { icon: Code2, href: "/research", label: "Research" },
              ].map(({ icon: Icon, href, label }) => (
                <Link key={label} href={href} aria-label={label}
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-maroon-800/40 border border-white/10 flex items-center justify-center transition-all duration-200 hover:border-maroon-600/50">
                  <Icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-4">{category}</h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href}
                      className="text-sm text-white/60 hover:text-maroon-400 transition-colors duration-200 flex items-center gap-1.5 group">
                      {link.label}
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © 2026 Department of Electronics &amp; Communication Engineering, GCT Coimbatore. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-white/40">
            <Link href="/about" className="hover:text-white/60 transition-colors">About</Link>
            <span>·</span>
            <Link href="/admissions" className="hover:text-white/60 transition-colors">Admissions</Link>
            <span>·</span>
            <span>NIRF Ranked #1 (7 Years)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
