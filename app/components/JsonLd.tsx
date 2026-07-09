import {
  socialLinks,
  projects,
  hackathonProjects,
  experience,
  education,
  skills,
} from "@/app/lib/data";

export default function JsonLd() {
  const siteUrl = socialLinks.portfolio;
  const allProjects = [...projects, ...hackathonProjects];

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Piyush Paul",
    url: siteUrl,
    email: `mailto:${socialLinks.email}`,
    jobTitle: "AI/ML Developer & Cybersecurity Engineer",
    description:
      "AI/ML Developer and Cybersecurity Engineer specializing in agentic AI systems, autonomous penetration testing pipelines, multi-agent orchestration, RAG, and high-performance backend engineering with DPDK and FastAPI. MLH Hack Days Winner.",
    sameAs: [socialLinks.github, socialLinks.linkedin, socialLinks.medium],
    knowsAbout: [
      ...skills.flatMap((s) => s.items),
      "Agentic AI",
      "Multi-Agent Systems",
      "Autonomous AI Agents",
      "Retrieval-Augmented Generation",
      "RAG",
      "Penetration Testing",
      "DPDK",
      "Network Security",
      "LLM Fine-tuning",
      "Gemini AI",
      "OpenAI GPT",
      "Anthropic Claude",
      "Server-Sent Events",
      "FastAPI",
    ],
    award: [
      "MLH Hack Days Winner 2026 — ARTA (Autonomous Red Team Agent)",
      "Synchronicity S2 1st Runner-Up 2026 — PacketForge (DPDK DDoS Scrubber)",
      "MLH HackTropica 1st Runner-Up 2026 — NeighbourNet (Offline Mesh Networking)",
    ],
  };

  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: "Piyush Paul",
      url: siteUrl,
      jobTitle: "AI/ML Developer & Cybersecurity Engineer",
      description:
        "AI/ML Developer and Cybersecurity Engineer building autonomous AI agents, high-performance network security systems, and full-stack applications. MLH Hack Days Winner · Synchronicity S2 Runner-Up · HackTropica Runner-Up.",
      sameAs: [socialLinks.github, socialLinks.linkedin, socialLinks.medium],
      alumniOf: education.map((edu) => ({
        "@type": "EducationalOrganization",
        name: edu.institution,
      })),
      hasOccupation: experience.map((exp) => ({
        "@type": "Occupation",
        name: exp.role,
        occupationLocation: {
          "@type": "Organization",
          name: exp.company,
        },
        description: exp.description,
      })),
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Piyush Paul — Portfolio",
    url: siteUrl,
    description:
      "Portfolio of Piyush Paul — AI/ML Developer and Cybersecurity Engineer building autonomous AI agents, DPDK network systems, and full-stack applications.",
    author: {
      "@type": "Person",
      name: "Piyush Paul",
    },
  };

  const projectListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Projects by Piyush Paul",
    description: "Featured software projects, hackathon wins, and applications built by Piyush Paul.",
    itemListElement: allProjects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "SoftwareApplication",
        name: project.title,
        description: project.tagline,
        url: project.liveUrl ?? `${siteUrl}/projects/${project.slug}`,
        applicationCategory: project.category,
        operatingSystem: "Web",
        author: {
          "@type": "Person",
          name: "Piyush Paul",
        },
        ...(project.githubUrl && {
          codeRepository: project.githubUrl,
        }),
      },
    })),
  };

  const awardsSchema = [
    {
      "@context": "https://schema.org",
      "@type": "AchievementCertificate",
      name: "MLH Hack Days Winner 2026",
      description:
        "Won MLH Hack Days by building ARTA — an autonomous multi-agent penetration testing system powered by Gemini AI.",
      recognizedBy: {
        "@type": "Organization",
        name: "Major League Hacking (MLH)",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "AchievementCertificate",
      name: "Synchronicity S2 — 1st Runner-Up 2026",
      description:
        "Secured 1st Runner-Up at Synchronicity S2, Jadavpur University for PacketForge — a DPDK-based DDoS scrubber sustaining 470K packets/sec.",
      recognizedBy: {
        "@type": "Organization",
        name: "JU ACM Student Chapter, Jadavpur University",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "AchievementCertificate",
      name: "MLH HackTropica — 1st Runner-Up 2026",
      description:
        "Secured 1st Runner-Up at MLH HackTropica for NeighbourNet — an offline mesh networking solution for disaster communication.",
      recognizedBy: {
        "@type": "Organization",
        name: "Major League Hacking (MLH)",
      },
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectListSchema) }}
      />
      {awardsSchema.map((award, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(award) }}
        />
      ))}
    </>
  );
}
