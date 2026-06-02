// Faculty data for ECE Department
export interface Faculty {
  id: number;
  name: string;
  designation: string;
  researchAreas: string[];
  email: string;
  profileUrl: string;
  initials: string;
  color: string;
}

export const faculty: Faculty[] = [
  {
    id: 1,
    name: "Prof. Krishna Jagannathan",
    designation: "Professor & Head of Department",
    researchAreas: ["Communication Networks", "Stochastic Systems", "Machine Learning"],
    email: "krishnaj@ee.gct.ac.in",
    profileUrl: "/faculty/krishna-jagannathan",
    initials: "KJ",
    color: "#8B1538",
  },
  {
    id: 2,
    name: "Prof. Shanti Bhattacharya",
    designation: "Professor",
    researchAreas: ["Photonics", "Micro-Optics", "MEMS"],
    email: "shanti@ee.gct.ac.in",
    profileUrl: "/faculty/shanti-bhattacharya",
    initials: "SB",
    color: "#1a2744",
  },
  {
    id: 3,
    name: "Prof. David Koilpillai",
    designation: "Professor",
    researchAreas: ["Wireless Communications", "Signal Processing", "5G/6G"],
    email: "david@ee.gct.ac.in",
    profileUrl: "/faculty/david-koilpillai",
    initials: "DK",
    color: "#6B0F2B",
  },
  {
    id: 4,
    name: "Dr. Nitin Chandrachoodan",
    designation: "Associate Professor",
    researchAreas: ["VLSI Design", "FPGA", "Reconfigurable Computing"],
    email: "nitin@ee.gct.ac.in",
    profileUrl: "/faculty/nitin-chandrachoodan",
    initials: "NC",
    color: "#2d4a8f",
  },
  {
    id: 5,
    name: "Prof. Radha Krishna Ganti",
    designation: "Professor",
    researchAreas: ["Stochastic Geometry", "Wireless Networks", "5G"],
    email: "rganti@ee.gct.ac.in",
    profileUrl: "/faculty/radha-krishna-ganti",
    initials: "RG",
    color: "#7B2D8B",
  },
  {
    id: 6,
    name: "Dr. Srikrishna Bhashyam",
    designation: "Professor",
    researchAreas: ["Information Theory", "Wireless Communications", "Signal Processing"],
    email: "skrishna@ee.gct.ac.in",
    profileUrl: "/faculty/srikrishna-bhashyam",
    initials: "SK",
    color: "#1a6b4a",
  },
  {
    id: 7,
    name: "Prof. Anil Prabhakar",
    designation: "Professor",
    researchAreas: ["Photonics", "Quantum Communication", "Fiber Optics"],
    email: "anilpr@ee.gct.ac.in",
    profileUrl: "/faculty/anil-prabhakar",
    initials: "AP",
    color: "#8B5500",
  },
  {
    id: 8,
    name: "Dr. Karthik Narasimhan",
    designation: "Assistant Professor",
    researchAreas: ["Embedded Systems", "IoT", "Low-Power VLSI"],
    email: "karthikn@ee.gct.ac.in",
    profileUrl: "/faculty/karthik-narasimhan",
    initials: "KN",
    color: "#4a1a6b",
  },
];
