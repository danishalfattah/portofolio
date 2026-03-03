"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getAllProjects } from "@/lib/projects";
import ScrollReveal from "@/components/ScrollReveal";


export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <main className="min-h-screen w-full" style={{ background: "#111" }}>
      {/* ── Top bar ── */}
      <nav className="flex items-center justify-between px-6 py-6 md:px-12">
        <Link
          href="/"
          className="group flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-white/60 uppercase transition-colors hover:text-white"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          <ArrowLeft className="h-4 w-4" />
          BACK HOME
        </Link>
        <span
          className="text-sm font-semibold tracking-[0.25em] text-white uppercase"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          ✱ DANISH
        </span>
      </nav>

      <div className="mx-auto max-w-6xl px-6 pt-8 pb-24 md:px-12 md:pt-16">
        {/* ── Header ── */}
        <ScrollReveal>
          <p
            className="mb-4 text-[10px] font-semibold tracking-[0.35em] uppercase text-white/50"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            // PORTFOLIO
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h1
            className="mb-4 text-white uppercase leading-[0.95]"
            style={{
              fontFamily: "'Anton', sans-serif",
              fontSize: "clamp(3rem, 8vw, 96px)",
              letterSpacing: "0.03em",
            }}
          >
            ALL <span className="text-white/50">PROJECTS</span>
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <p
            className="mb-12 max-w-md text-sm leading-relaxed text-white/50"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            A curated collection of my selected works spanning brand identity,
            web design, mobile apps, and etc.
          </p>
        </ScrollReveal>

        {/* ── Project grid ── */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ScrollReveal key={project.slug} delay={i * 0.1}>
              <Link
                href={`/projects/${project.slug}`}
                className="group relative block overflow-hidden rounded-2xl transition-transform duration-500 hover:scale-[1.03]"
              >
                {/* Thumbnail or Gradient Fallback */}
                <div
                  className="aspect-[3/4] w-full relative transition-transform duration-700 group-hover:scale-110"
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
                        className="text-center text-[12vw] leading-none text-white/10 uppercase sm:text-[6vw] lg:text-[3vw]"
                        style={{ fontFamily: "'Anton', sans-serif" }}
                      >
                        {project.title.split(" ")[0]}
                      </span>
                    </div>
                  )}
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Info */}
                <div className="absolute right-0 bottom-0 left-0 p-5">
                  <p
                    className="mb-1 text-[10px] font-medium tracking-[0.2em] text-white/60 uppercase"
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
    </main>
  );
}
