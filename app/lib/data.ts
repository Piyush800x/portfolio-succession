// ─── Type Definitions ───

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  year: string;
  role: string;
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
  challenge: string;
  approach: string;
  outcome: string;
}

export interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface ResearchEntry {
  date: string;
  title: string;
  category: string;
  description: string;
}

export interface EducationEntry {
  degree: string;
  institution: string;
  location: string;
  period: string;
}

// ─── Projects ───

export const projects: Project[] = [
  {
    slug: "astroroni",
    title: "AstroRoni",
    tagline: "Full-stack Vedic astrology platform with NASA ephemeris-based Kundli generation, 36 Guna matching, numerology, and NRI-friendly consultation booking.",
    category: "Full-Stack Platform",
    year: "2025",
    role: "Full-Stack Developer",
    stack: ["Next.js", "Python", "Flask", "MongoDB", "NASA Ephemeris"],
    liveUrl: "https://astroroni.com",
    challenge:
      "Vedic astrology requires accurate planetary position calculations rooted in complex astronomical data. Existing platforms were outdated, inaccurate, or lacked the modern UX needed to make astrology services accessible — especially for NRI users across global time zones.",
    approach:
      "Built a comprehensive platform with a computation engine powered by NASA ephemeris data for precise planetary calculations. Developed modules for Kundli generation, 36 Guna matching for marriage compatibility, Panchang (daily tithi, nakshatra, yoga), horoscope predictions, numerology grid analysis, and a numerology calculator. Integrated NRI-friendly consultation booking with global timezone support.",
    outcome:
      "Launched a production platform at astroroni.com offering six free report types — Kundli, Kundli Matching, Panchang, Horoscope, Numerology Grid, and Numerology Calculator — alongside premium consultation services. Trusted by thousands of users with scientifically accurate Vedic calculations.",
  },
  {
    slug: "riskradar",
    title: "RiskRadar",
    tagline: "Sophisticated vulnerability detection and alerting software that tracks CVEs and notifies users when their products are affected.",
    category: "Security Tool",
    year: "2024",
    role: "Full-Stack Developer",
    stack: ["Next.js", "TypeScript", "Flask", "Python", "MongoDB"],
    liveUrl: "https://riskradar.piyushpaul.com",
    githubUrl: "https://github.com/Piyush800x/risk-radar-web",
    challenge:
      "Development teams need real-time awareness of Common Vulnerabilities and Exposures (CVEs) affecting their tech stack. Manually tracking security advisories across fragmented sources is impractical, error-prone, and leaves critical windows of exposure.",
    approach:
      "Engineered a product vulnerability assessment platform with a Next.js/TypeScript frontend and Flask API backend. Built CVE database ingestion pipelines, product-to-vulnerability mapping logic, and automated email notification dispatching when critical vulnerabilities are detected in registered products.",
    outcome:
      "Deployed a fully functional vulnerability scanner at riskradar.piyushpaul.com. Automated CVE tracking and alerting pipeline that keeps development teams informed in real-time, significantly reducing manual monitoring effort and improving incident response time.",
  },
  {
    slug: "online-exam-panel",
    title: "Online Exam Panel",
    tagline: "Fully automated examination platform with comprehensive admin controls, flexible exam creation, and instant result delivery.",
    category: "Education Platform",
    year: "2024",
    role: "Full-Stack Developer",
    stack: ["Next.js", "TypeScript", "MongoDB", "REST API"],
    liveUrl: "https://exam-panel.piyushpaul.com",
    githubUrl: "https://github.com/Piyush800x/online-exam-panel",
    challenge:
      "Educational institutions needed a flexible, fully automated online examination platform that handles the entire lifecycle — from exam creation and student management to automated grading and instant result generation.",
    approach:
      "Built a complete examination system in TypeScript with a robust Admin UI for exam configuration, question bank management, and scheduling. Developed the student-facing interface with real-time timer, auto-submission, and instant result delivery. Designed for flexibility to support multiple exam formats and question types.",
    outcome:
      "Delivered a production-ready exam platform at exam-panel.piyushpaul.com with full admin controls, automated grading, and instant result publishing. Eliminates manual evaluation overhead entirely.",
  },
  {
    slug: "timezone-converter",
    title: "TimeZonesNow",
    tagline: "World clock and time zone converter with modern UI — 2nd Place winner at Code Circuit Frontend Hackathon.",
    category: "Web Application",
    year: "2025",
    role: "Frontend Developer",
    stack: ["Next.js", "Tailwindcss", "Modern UI", "TypeScript"],
    liveUrl: "https://timezone.piyushpaul.com",
    challenge:
      "Coordinating across time zones remains a persistent pain point for distributed teams and remote workers. Existing converters lacked visual clarity, real-time updates, and the design sensibility expected of modern web tools.",
    approach:
      "Designed and built a clean, modern world clock and time zone converter with emphasis on intuitive UX — real-time clock displays, instant zone conversion, and a responsive layout that works across all devices. Focused on visual polish and immediate usability.",
    outcome:
      "Secured 2nd Place at the Code Circuit Frontend Hackathon. Deployed at timezone.piyushpaul.com as a production-quality tool serving instant time zone conversions with a polished, modern interface.",
  },
];

// ─── Experience ───

export const experience: ExperienceEntry[] = [
  {
    role: "Freelance Backend Developer",
    company: "Fluencer Market",
    period: "Dec 2024 — Apr 2025",
    description:
      "Developed and maintained RESTful APIs to support influencer-brand collaborations using Flask.",
    highlights: [
      "Designed scalable backend services for managing influencer data and brand profiles",
      "Built campaign workflow automation and performance analytics pipelines",
      "Delivered production-grade APIs supporting real-time collaboration features",
    ],
  },
];

// ─── Education ───

export const education: EducationEntry[] = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "JIS College of Engineering",
    location: "West Bengal, India",
    period: "2025 — 2028",
  },
  {
    degree: "Diploma in Computer Science and Technology",
    institution: "JIS School of Polytechnic",
    location: "West Bengal, India",
    period: "2022 — 2025",
  },
];

// ─── Skills ───

export const skills = [
  { category: "Backend", items: ["Python", "Node.js", "Java", "C++", "Rust"] },
  { category: "Frontend", items: ["JavaScript", "React", "Next.js", "HTML", "CSS", "Tailwind CSS"] },
  { category: "Frameworks", items: ["Flask", "Django", "Spring Boot"] },
  { category: "Database & Cloud", items: ["MongoDB", "PostgreSQL", "MySQL", "SQLite", "GCP", "AWS"] },
  { category: "Tools & DevOps", items: ["Git", "Docker", "Linux", "Redis", "Shell Scripting", "Postman"] },
];

// ─── Research / Writing ───

export const research: ResearchEntry[] = [
  {
    date: "2025.02",
    title: "Building Vedic Astrology Engines with NASA Ephemeris Data",
    category: "Engineering",
    description:
      "Technical deep-dive into implementing astronomical calculation engines for AstroRoni — from planetary position algorithms using NASA ephemeris to Kundli chart rendering and 36 Guna matching logic.",
  },
  {
    date: "2024.11",
    title: "Architecture of a Real-Time CVE Tracking System",
    category: "Security",
    description:
      "Architectural decisions behind building RiskRadar — CVE database ingestion pipelines, product-to-vulnerability mapping, and automated email notification dispatching at scale.",
  },
  {
    date: "2024.08",
    title: "Browser Automation at Scale with Python and Selenium",
    category: "Automation",
    description:
      "Practical patterns for browser automation including session management, anti-detection techniques, and scheduled task orchestration for reward collection systems.",
  },
  {
    date: "2024.05",
    title: "Designing Scalable REST APIs with Flask",
    category: "Backend",
    description:
      "Best practices for Flask API architecture — blueprint structuring, authentication middleware, database connection pooling, and patterns learned building APIs for Fluencer Market.",
  },
];

// ─── Links ───

export const socialLinks = {
  github: "https://github.com/Piyush800x",
  linkedin: "https://linkedin.com/in/piyushpaul/",
  medium: "https://medium.com/@piyush_paul",
  portfolio: "https://piyushpaul.com",
  email: "contact@piyushpaul.com",
};
