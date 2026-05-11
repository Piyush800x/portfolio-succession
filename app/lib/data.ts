// ─── Type Definitions ───

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  year: string;
  role: string;
  stack: string[];
  team?: string;
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
    slug: "http-header-security-analyzer",
    title: "HTTP Header Security Analyzer API",
    tagline: "Production-ready Flask REST API that audits website HTTP security headers, scores sites out of 100 with A–F grading, and returns severity-ranked remediation recommendations.",
    category: "Full-Stack API / Security Tool",
    year: "2026",
    role: "Full-Stack Developer",
    stack: ["Python", "Flask", "Gunicorn", "Docker", "requests", "pytest"],
    githubUrl: "https://github.com/Piyush800x/header-analyzer",
    challenge:
      "Most developers overlook HTTP security headers during deployment, leaving sites vulnerable to XSS, clickjacking, MIME sniffing, and transport-layer attacks. Existing tools were either too manual, lacked actionable guidance, or weren't suitable for programmatic integration into CI/CD pipelines.",
    approach:
      "Built a REST API with Flask Blueprints that fetches and audits 8 OWASP-recommended security headers — including CSP, HSTS, and X-Frame-Options — assigning severity levels (HIGH / MEDIUM / LOW) and point-based scores to each. Implemented built-in rate limiting (30 req/min per IP) without external dependencies, CORS support for frontend integration, structured JSON error handling, and a health check endpoint. Deployed with Gunicorn and Docker for production readiness, with 12 unit tests covering core analysis logic.",
    outcome:
      "Delivered a fully containerized, production-grade security auditing API with two scan modes (POST JSON body and GET query param), a 0–100 scoring system with A–F grading, and per-header remediation recommendations linked to MDN documentation. Demonstrates REST API design, OWASP security knowledge, and clean separation of concerns via Flask Blueprints.",
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
];

export const hackathonProjects: Project[] = [
  {
    slug: "neighbournet",
    title: "NeighbourNet",
    tagline: "Offline mesh SOS communication system with on-device AI triage for disaster scenarios where cellular infrastructure fails.",
    category: "Mesh Network / Security",
    year: "2026",
    role: "Full-Stack Developer",
    team: "Team Aloo Siddo",
    stack: ["React Native", "FastAPI", "Supabase", "Gemini 2.5 Flash", "Bluetooth"],
    githubUrl: "https://github.com/sudipta57/NeighbourNet2",
    challenge:
      "Traditional communication infrastructure (cellular, internet) is the first thing to fail during natural disasters like floods or cyclones. This leaves victims unable to send SOS messages and rescue teams unable to coordinate or triage needs in real-time.",
    approach:
      "Developed an offline-first mesh networking system that turns Android devices into relay nodes using BLE and WiFi Direct. SOS messages hop phone-to-phone without internet, are triaged on-device using a multilingual keyword-scoring engine, and automatically sync to a cloud-based coordinator dashboard when any device in the mesh gains connectivity.",
    outcome:
      "Achieved 1st Runners Up at HackTropica 2K26 (MLH). Delivered a functional prototype including a React Native mobile app for victims/relays, a FastAPI backend with Gemini 2.5 Flash for cloud-side triage, and a real-time Next.js dashboard for disaster response coordinators.",
  },
  {
    slug: "arta",
    title: "ARTA — Autonomous Red Team Agent",
    tagline: "Autonomous penetration testing pipeline powered by Gemini 2.0 Flash — MLH 8-hour sprint hackathon.",
    category: "Cybersecurity / AI Agent",
    year: "2026",
    role: "Full-Stack Developer",
    stack: ["Python", "FastAPI", "Next.js", "Gemini 2.0 Flash", "Nmap"],
    githubUrl: "https://github.com/Piyush800x/arta",
    challenge:
      "Manual penetration testing is slow and resource-intensive. Security teams need a way to automate the reconnaissance, vulnerability scanning, and reporting phases to identify critical security gaps in minutes, not days.",
    approach:
      "Built a multi-agent orchestration system using Gemini 2.0 Flash to handle the entire offensive pipeline. Developed specialized agents for Recon (Nmap parsing), Vulnerability Analysis (live NVD API integration), and Automated Reporting. Implemented a real-time SSE dashboard in Next.js to monitor the agent's reasoning and tool usage as it scans Metasploitable targets.",
    outcome:
      "Successfully demonstrated an autonomous end-to-end security pipeline during an MLH 8-hour sprint. Delivered a tool that produces severity-ranked findings and professional remediation reports with zero manual intervention.",
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
  { category: "Frameworks", items: ["Flask", "Django", "Spring Boot", "FastAPI"] },
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
