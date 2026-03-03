import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllProjects, getProjectBySlug } from "@/lib/projects";
import ProjectDetail from "@/components/ProjectDetail";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  const description =
    project.description.length > 160
      ? project.description.substring(0, 157) + "..."
      : project.description;

  return {
    title: project.title,
    description,
    keywords: [
      project.title,
      ...project.tools,
      project.category,
      "Danish Alfattah",
      "portfolio",
    ],
    openGraph: {
      title: `${project.title} — Danish Alfattah`,
      description,
      url: `https://danishalfattah.site/projects/${project.slug}`,
      type: "article",
      images: project.thumbnail
        ? [
            {
              url: project.thumbnail,
              width: 1200,
              height: 630,
              alt: project.title,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — Danish Alfattah`,
      description,
      images: project.thumbnail ? [project.thumbnail] : undefined,
    },
    alternates: {
      canonical: `https://danishalfattah.site/projects/${project.slug}`,
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return <ProjectDetail slug={slug} />;
}
