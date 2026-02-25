import { socialLinks } from "@/app/lib/data";

export default function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Piyush Paul",
    url: socialLinks.portfolio,
    email: `mailto:${socialLinks.email}`,
    jobTitle: "Full-Stack Developer",
    description:
      "Full-Stack Developer and Backend Engineer specializing in Python, Next.js, Flask, React, and cloud-native architectures.",
    sameAs: [
      socialLinks.github,
      socialLinks.linkedin,
      socialLinks.medium,
    ],
    knowsAbout: [
      "Full-Stack Development",
      "Backend Engineering",
      "Python",
      "Next.js",
      "React",
      "Flask",
      "TypeScript",
      "MongoDB",
      "PostgreSQL",
      "AWS",
      "GCP",
      "Docker",
      "REST API Design",
      "Cybersecurity",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Piyush Paul — Portfolio",
    url: socialLinks.portfolio,
    description:
      "Portfolio of Piyush Paul — Full-Stack Developer and Backend Engineer building scalable systems and modern web applications.",
    author: {
      "@type": "Person",
      name: "Piyush Paul",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
