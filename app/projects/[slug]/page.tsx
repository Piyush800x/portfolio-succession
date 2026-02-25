import type { Metadata } from "next";
import { projects } from "@/app/lib/data";
import ProjectContent from "./ProjectContent";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

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
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — Piyush Paul`,
      description: project.tagline,
    },
    alternates: {
      canonical: `https://piyushpaul.com/projects/${project.slug}`,
    },
  };
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage() {
  return <ProjectContent />;
}
