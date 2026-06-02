// Stats for animated counters
export const stats = [
  { label: "Faculty Members", value: 55, suffix: "+", icon: "Users" },
  { label: "Research Labs", value: 18, suffix: "+", icon: "FlaskConical" },
  { label: "Publications / Year", value: 400, suffix: "+", icon: "BookOpen" },
  { label: "Research Scholars", value: 280, suffix: "+", icon: "GraduationCap" },
];

// Research areas — ECE
export const researchAreas = [
  {
    id: "signal-processing",
    title: "Signal Processing",
    description: "Advanced signal processing for audio, image, video, and biomedical signals using classical and learning-based methods.",
    icon: "BarChart3",
    color: "#8B1538",
    link: "/research/signal-processing",
    faculty: 12,
    papers: "120+",
  },
  {
    id: "communications",
    title: "Communications & Networks",
    description: "Wireless communications, 5G/6G, information theory, network coding, and next-generation communication systems.",
    icon: "Radio",
    color: "#1a2744",
    link: "/research/communications",
    faculty: 14,
    papers: "140+",
  },
  {
    id: "vlsi",
    title: "VLSI & Embedded Systems",
    description: "Chip design, FPGA, reconfigurable computing, low-power VLSI, and embedded system architectures.",
    icon: "Cpu",
    color: "#2d6b2d",
    link: "/research/vlsi",
    faculty: 10,
    papers: "90+",
  },
  {
    id: "photonics",
    title: "Photonics & Quantum",
    description: "Fiber optics, integrated photonics, quantum communication, micro-optics, and MEMS-based optical systems.",
    icon: "Zap",
    color: "#7B2D8B",
    link: "/research/photonics",
    faculty: 8,
    papers: "80+",
  },
  {
    id: "rf-microwave",
    title: "RF & Microwave",
    description: "Antenna design, RF circuit design, radar systems, microwave engineering, and electromagnetic compatibility.",
    icon: "Wifi",
    color: "#8B5500",
    link: "/research/rf-microwave",
    faculty: 7,
    papers: "65+",
  },
  {
    id: "control-systems",
    title: "Control & Instrumentation",
    description: "Control systems theory, robotics, mechatronics, sensors, and intelligent instrumentation systems.",
    icon: "Settings",
    color: "#1a6b6b",
    link: "/research/control-systems",
    faculty: 8,
    papers: "70+",
  },
];

// Programs
export const programs = [
  {
    id: "be",
    title: "B.E.",
    subtitle: "Bachelor of Engineering",
    duration: "4 Years",
    seats: "~100 Seats",
    description: "A comprehensive undergraduate program covering circuits, signals, communications, photonics, and modern electronics engineering.",
    highlights: ["TNEA Entry", "Industry Internships", "Project Labs", "Minor Degrees Available"],
    link: "/programs/be",
    color: "#8B1538",
  },
  {
    id: "me",
    title: "M.E.",
    subtitle: "Master of Engineering",
    duration: "2 Years",
    seats: "~40 Seats",
    description: "Advanced specializations in Applied Electronics and VLSI Design with strong industry linkages.",
    highlights: ["TANCET / GATE Entry", "TA/RA Opportunities", "Industry Projects", "State-of-art Labs"],
    link: "/programs/me",
    color: "#1a2744",
  }
];

// Labs
export const labs = [
  {
    name: "GCT Wireless",
    fullName: "Wireless Research Lab",
    description: "Cutting-edge research in 5G/6G wireless communications, massive MIMO, and heterogeneous networks.",
    url: "/labs/wireless",
    icon: "Wifi",
    color: "#8B1538",
  },
  {
    name: "VLSI Lab",
    fullName: "VLSI Design Laboratory",
    description: "Advanced VLSI chip design, FPGA prototyping, and low-power embedded systems research.",
    url: "/labs/vlsi",
    icon: "Cpu",
    color: "#1a2744",
  },
  {
    name: "Photonics Lab",
    fullName: "Photonics & Quantum Lab",
    description: "Integrated photonics, quantum communication, fiber optic systems, and micro-optical devices.",
    url: "/labs/photonics",
    icon: "Zap",
    color: "#7B2D8B",
  },
  {
    name: "DSP Lab",
    fullName: "Digital Signal Processing Lab",
    description: "Research in audio/video processing, biomedical signal analysis, and machine learning for signals.",
    url: "/labs/dsp",
    icon: "BarChart3",
    color: "#2d6b2d",
  },
  {
    name: "RF Lab",
    fullName: "RF & Microwave Laboratory",
    description: "Antenna design, RF circuits, radar systems, and electromagnetic compatibility research.",
    url: "/labs/rf",
    icon: "Radio",
    color: "#8B5500",
  },
  {
    name: "Control Lab",
    fullName: "Control & Robotics Laboratory",
    description: "Control systems, robotics, mechatronics, and intelligent instrumentation research.",
    url: "/labs/control",
    icon: "Settings",
    color: "#1a6b6b",
  },
];

// News items
export const newsItems = [
  {
    id: 1,
    date: "May 2026",
    category: "Award",
    title: "Prof. Radha Krishna Ganti receives IEEE ComSoc Best Paper Award 2026",
    description: "Recognized for outstanding contributions to stochastic geometry-based analysis of wireless networks.",
    link: "/news/radha-ganti-ieee-award",
    badge: "Award",
    badgeColor: "#D4AF37",
  },
  {
    id: 2,
    date: "May 2026",
    category: "Admission",
    title: "MS/PhD Selected Candidate List — 2026 Admissions",
    description: "The list of selected candidates for ECE MS/PhD programs for the 2026 batch has been released.",
    link: "/admissions/selected-2026",
    badge: "Admissions",
    badgeColor: "#8B1538",
  },
  {
    id: 3,
    date: "April 2026",
    category: "Research",
    title: "GCT Coimbatore ECE team demonstrates first 6G testbed in India",
    description: "The wireless research lab at GCT Coimbatore has successfully demonstrated a 6G sub-terahertz testbed.",
    link: "/news/6g-testbed-gct",
    badge: "Research",
    badgeColor: "#1a2744",
  },
  {
    id: 4,
    date: "April 2026",
    category: "Award",
    title: "Prof. Shanti Bhattacharya wins OSA Fellowship 2026",
    description: "Recognized by the Optical Society of America for pioneering contributions to micro-optics and MEMS.",
    link: "/news/shanti-osa-fellowship",
    badge: "Award",
    badgeColor: "#D4AF37",
  },
  {
    id: 5,
    date: "March 2026",
    category: "Faculty",
    title: "Dr. Karthik Narasimhan joins the ECE Department",
    description: "Dr. Karthik Narasimhan joins as Assistant Professor, bringing expertise in IoT and low-power VLSI.",
    link: "/news/karthik-joins-ece",
    badge: "Faculty",
    badgeColor: "#2d6b2d",
  },
  {
    id: 6,
    date: "Jan 2026",
    category: "Honor",
    title: "GCT Coimbatore ECE ranked #1 in India — NIRF 2026",
    description: "The ECE department at GCT Coimbatore continues its reign as India's top-ranked electronics engineering program.",
    link: "/news/nirf-2026-ranking",
    badge: "Honor",
    badgeColor: "#8B5500",
  },
];

// Upcoming events
export const events = [
  {
    id: 1,
    title: "ECE Semester Farewell & Awards Night",
    date: "May 30, 2026",
    time: "6:30 PM",
    type: "Social",
    location: "ECE Department, GCT Coimbatore",
    link: "/events/farewell-2026",
    color: "#8B1538",
  },
  {
    id: 2,
    title: "Workshop on 6G Communications & Terahertz Systems",
    date: "June 12, 2026",
    time: "9:00 AM",
    type: "Research",
    location: "Seminar Hall, ECE Block",
    link: "/events/6g-workshop-2026",
    color: "#1a2744",
  },
  {
    id: 3,
    title: "ECE Research Poster Day 2026",
    date: "July 5, 2026",
    time: "9:00 AM",
    type: "Academic",
    location: "ECE Main Hall, GCT Coimbatore",
    link: "/events/poster-day-2026",
    color: "#2d4a8f",
  },
  {
    id: 4,
    title: "ElecTech — Student Electronics Showcase",
    date: "July 22, 2026",
    time: "10:00 AM",
    type: "Exhibition",
    location: "GCT Coimbatore Campus",
    link: "/events/electech-2026",
    color: "#7B2D8B",
  },
];

// Placement stats
export const placementStats = [
  { label: "Highest CTC", value: "₹3.2 Cr", subtext: "International Package" },
  { label: "Average CTC", value: "₹28 LPA", subtext: "B.Tech 2025 Batch" },
  { label: "Placement Rate", value: "97%", subtext: "Consistent Track Record" },
  { label: "Companies", value: "120+", subtext: "Recruiting Partners" },
];

export const recruitingCompanies = [
  "Qualcomm", "Texas Instruments", "Intel", "Samsung", "NVIDIA",
  "Apple", "Google", "Microsoft", "Broadcom", "MediaTek",
  "ST Microelectronics", "NXP Semiconductors", "Analog Devices", "Marvell", "Cadence",
  "Synopsys", "ARM", "ISRO", "DRDO", "Bosch",
];

// Achievements
export const achievements = [
  {
    icon: "Trophy",
    title: "IEEE ComSoc Best Paper 2026",
    description: "Prof. Radha Krishna Ganti wins prestigious IEEE Communications Society award",
    color: "#D4AF37",
  },
  {
    icon: "Star",
    title: "OSA Fellowship — Prof. Shanti Bhattacharya",
    description: "Recognized by the Optical Society of America for contributions to photonics",
    color: "#8B1538",
  },
  {
    icon: "Award",
    title: "#1 Ranked Institute",
    description: "GCT Coimbatore ranked #1 in NIRF for 7 consecutive years",
    color: "#1a2744",
  },
  {
    icon: "Globe",
    title: "QS Top 50 Asia",
    description: "GCT Coimbatore recognized among Top 50 Asian Universities in QS Rankings",
    color: "#2d6b2d",
  },
  {
    icon: "Zap",
    title: "India's First 6G Testbed",
    description: "ECE research team demonstrates sub-terahertz 6G testbed — a national first",
    color: "#7B2D8B",
  },
  {
    icon: "BookOpen",
    title: "Best Paper — IEEE VLSI 2025",
    description: "VLSI lab team wins best paper at IEEE International VLSI Design Conference",
    color: "#8B5500",
  },
];
