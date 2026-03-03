"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { getAllProjects } from "@/lib/projects";
import ScrollReveal from "./ScrollReveal";

export default function ProjectsSection() {
  const projects = getAllProjects().slice(0, 3);

  return (
    <section
      id="projects"
      className="relative w-full overflow-hidden py-24 md:py-36"
      style={{
        background: "linear-gradient(180deg, #1a1a1a 0%, #111 100%)",
      }}
    >
      {/* Faint watermark */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center select-none"
      >
        <span
          className="whitespace-nowrap text-white text-[20vw] leading-none uppercase"
          style={{
            fontFamily: "'Anton', sans-serif",
            opacity: 0.04,
            filter: "blur(3px)",
          }}
        >
          WORKS
        </span>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-12">
        {/* Header */}
        <div className="mb-16 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <ScrollReveal>
              <p
                className="mb-4 text-[10px] font-semibold tracking-[0.35em] uppercase text-white/40"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                // PORTFOLIO
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2
                className="text-white uppercase leading-[0.95]"
                style={{
                  fontFamily: "'Anton', sans-serif",
                  fontSize: "clamp(2.5rem, 6vw, 72px)",
                  letterSpacing: "0.03em",
                }}
              >
                SELECTED
                <br />
                WORKS
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal direction="right" delay={0.2}>
            <Link
              href="/projects"
              className="group flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-white/60 uppercase transition-opacity hover:text-white"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              VIEW ALL PROJECTS
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 transition-colors group-hover:bg-white">
                <ArrowUpRight className="h-3.5 w-3.5 text-white transition-colors group-hover:text-[#111]" />
              </span>
            </Link>
          </ScrollReveal>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {projects.map((project, i) => (
            <ScrollReveal key={project.slug} delay={i * 0.15}>
              <Link
                href={`/projects/${project.slug}`}
                className="group relative block overflow-hidden rounded-2xl transition-transform duration-500 hover:scale-[1.03]"
              >
                {/* Thumbnail or Gradient Fallback */}
                <div
                  className="aspect-3/4 w-full relative transition-transform duration-700 group-hover:scale-110"
                  style={{ background: project.gradient }}
                >
                  {project.thumbnail ? (
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full flex-col items-center justify-center p-6">
                      <span
                        className="text-center text-[8vw] leading-none text-white/8 uppercase md:text-[3vw]"
                        style={{ fontFamily: "'Anton', sans-serif" }}
                      >
                        {project.title.split(" ")[0]}
                      </span>
                    </div>
                  )}
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Card info */}
                <div className="absolute right-0 bottom-0 left-0 p-5">
                  <p
                    className="mb-1 text-[10px] font-medium tracking-[0.2em] text-white/50 uppercase"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {project.category} — {project.year}
                  </p>
                  <h3
                    className="text-xl text-white uppercase md:text-2xl"
                    style={{
                      fontFamily: "'Anton', sans-serif",
                      letterSpacing: "0.03em",
                    }}
                  >
                    {project.title}
                  </h3>
                </div>

                {/* Arrow */}
                <div className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:bg-white">
                  <ArrowUpRight className="h-4 w-4 text-white transition-colors group-hover:text-[#111]" />
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
