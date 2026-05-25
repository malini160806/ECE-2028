// Faculty data
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
    name: "Prof. Madhu Mutyam",
    designation: "Professor & Head of Department",
    researchAreas: ["Computer Architecture", "Memory Systems", "Embedded Systems"],
    email: "madhu@cse.iitm.ac.in",
    profileUrl: "https://cse.iitm.ac.in/outerfaculty.php",
    initials: "MM",
    color: "#8B1538",
  },
  {
    id: 2,
    name: "Prof. Shweta Agrawal",
    designation: "Professor",
    researchAreas: ["Cryptography", "Security", "Homomorphic Encryption"],
    email: "shweta@cse.iitm.ac.in",
    profileUrl: "https://cse.iitm.ac.in/outerfaculty.php",
    initials: "SA",
    color: "#1a2744",
  },
  {
    id: 3,
    name: "Prof. Chester Rebeiro",
    designation: "Professor",
    researchAreas: ["Hardware Security", "Cybersecurity", "VLSI"],
    email: "chester@cse.iitm.ac.in",
    profileUrl: "https://cse.iitm.ac.in/outerfaculty.php",
    initials: "CR",
    color: "#6B0F2B",
  },
  {
    id: 4,
    name: "Dr. Meghana Nasre",
    designation: "Associate Professor",
    researchAreas: ["Graph Algorithms", "Matching Theory", "Combinatorics"],
    email: "meghana@cse.iitm.ac.in",
    profileUrl: "https://cse.iitm.ac.in/outerfaculty.php",
    initials: "MN",
    color: "#2d4a8f",
  },
  {
    id: 5,
    name: "Prof. Krishna Nandivada",
    designation: "Professor",
    researchAreas: ["Compilers", "HPC", "Parallel Programming"],
    email: "kvs@cse.iitm.ac.in",
    profileUrl: "https://cse.iitm.ac.in/outerfaculty.php",
    initials: "KN",
    color: "#7B2D8B",
  },
  {
    id: 6,
    name: "Dr. Ashrujit Ghoshal",
    designation: "Assistant Professor",
    researchAreas: ["Cryptography", "Information Theoretic Security"],
    email: "ashrujit@cse.iitm.ac.in",
    profileUrl: "https://cse.iitm.ac.in/outerfaculty.php",
    initials: "AG",
    color: "#1a6b4a",
  },
  {
    id: 7,
    name: "Prof. Sukhendu Das",
    designation: "Professor",
    researchAreas: ["Computer Vision", "Machine Learning", "Image Processing"],
    email: "sdas@cse.iitm.ac.in",
    profileUrl: "https://cse.iitm.ac.in/outerfaculty.php",
    initials: "SD",
    color: "#8B5500",
  },
  {
    id: 8,
    name: "Dr. Pulkit Verma",
    designation: "Assistant Professor",
    researchAreas: ["AI Planning", "Explainable AI", "Robotics"],
    email: "pulkit@cse.iitm.ac.in",
    profileUrl: "https://cse.iitm.ac.in/outerfaculty.php",
    initials: "PV",
    color: "#4a1a6b",
  },
];
