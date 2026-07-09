import type { Metadata } from "next";
import { projects, hackathonProjects } from "@/app/lib/data";
import ProjectContent from "./ProjectContent";

const allProjects = [...projects, ...hackathonProjects];

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = allProjects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} — Case Study`,
    description: project.tagline,
    openGraph: {
      title: `${project.title} — Piyush Paul`,
      description: project.tagline,
      type: "article",
      url: `https://piyushpaul.com/projects/${project.slug}`,
      images: [
        {
          url: `/api/og/project?slug=${project.slug}`,
          width: 1200,
          height: 630,
          alt: `${project.title} — Piyush Paul`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — Piyush Paul`,
      description: project.tagline,
      images: [`/api/og/project?slug=${project.slug}`],
    },
    alternates: {
      canonical: `https://piyushpaul.com/projects/${project.slug}`,
    },
  };
}

export function generateStaticParams() {
  return allProjects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage() {
  return <ProjectContent />;
}
