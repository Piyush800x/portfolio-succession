import {
  socialLinks,
  projects,
  experience,
  education,
  skills,
} from "@/app/lib/data";

export default function JsonLd() {
  const siteUrl = socialLinks.portfolio;

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Piyush Paul",
    url: siteUrl,
    email: `mailto:${socialLinks.email}`,
    jobTitle: "Full-Stack Developer",
    description:
      "Full-Stack Developer and Backend Engineer specializing in Python, Next.js, Flask, React, and cloud-native architectures.",
    sameAs: [socialLinks.github, socialLinks.linkedin, socialLinks.medium],
    knowsAbout: skills.flatMap((s) => s.items),
  };

  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: "Piyush Paul",
      url: siteUrl,
      jobTitle: "Full-Stack Developer & Backend Engineer",
      description:
        "Full-Stack Developer and Backend Engineer specializing in Python, Next.js, Flask, React, and cloud-native architectures. Building scalable systems, security tools, and modern web applications.",
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
      "Portfolio of Piyush Paul — Full-Stack Developer and Backend Engineer building scalable systems and modern web applications.",
    author: {
      "@type": "Person",
      name: "Piyush Paul",
    },
  };

  const projectListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Projects by Piyush Paul",
    description: "Featured software projects and applications.",
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "SoftwareApplication",
        name: project.title,
        description: project.tagline,
        url: project.liveUrl,
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
    </>
  );
}
