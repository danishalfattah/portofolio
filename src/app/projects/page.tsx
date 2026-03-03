import type { Metadata } from "next";
import ProjectsGrid from "@/components/ProjectsGrid";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore all projects by Danish Alfattah — a curated collection of works spanning web apps, mobile apps, AI, civic tech, fintech, and more.",
  openGraph: {
    title: "Projects — Danish Alfattah",
    description:
      "A curated collection of selected works spanning web apps, mobile apps, AI, and more by Danish Alfattah.",
    url: "https://danishalfattah.site/projects",
  },
  alternates: {
    canonical: "https://danishalfattah.site/projects",
  },
};

export default function ProjectsPage() {
  return <ProjectsGrid />;
}
