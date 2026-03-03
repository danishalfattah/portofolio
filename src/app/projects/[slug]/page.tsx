"use client";

import { use } from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Github, Globe } from "lucide-react";
import { getAllProjects, getProjectBySlug } from "@/lib/projects";
import ScrollReveal from "@/components/ScrollReveal";

export default function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const allProjects = getAllProjects();
  const currentIndex = allProjects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : null;

  return (
    <main className="min-h-screen w-full" style={{ background: "#111" }}>
      {/* ── Floating back button ── */}
      <nav className="absolute top-0 left-0 z-30 flex w-full items-center justify-between px-6 py-6 md:px-12">
        <Link
          href="/projects"
          className="group flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-white/70 uppercase transition-colors hover:text-white"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 transition-colors group-hover:bg-white">
            <ArrowLeft className="h-3.5 w-3.5 text-white transition-colors group-hover:text-[#111]" />
          </span>
          ALL PROJECTS
        </Link>
      </nav>

      {/* ════════════════════════════════════════════
          HERO BANNER
      ════════════════════════════════════════════ */}
      <section
        className="relative flex min-h-[70vh] w-full flex-col items-center justify-end overflow-hidden pb-16 pt-32 md:min-h-[80vh] md:pb-24"
        style={{ background: project.gradient }}
      >
        {/* Optional Thumbnail Image */}
        {project.thumbnail && (
          <div className="absolute inset-0 z-0">
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className="object-cover object-top opacity-50 mix-blend-overlay"
            />
          </div>
        )}

        {/* Bottom gradient fade */}
        <div className="absolute right-0 bottom-0 left-0 h-48 bg-linear-to-t from-[#111] to-transparent" />

        {/* Content */}
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 md:px-12">
          <ScrollReveal>
            <p
              className="mb-3 text-[10px] font-semibold tracking-[0.35em] uppercase text-white/70"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {project.category} — {project.year}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1
              className="text-white uppercase leading-[0.9]"
              style={{
                fontFamily: "'Anton', sans-serif",
                fontSize: "clamp(3rem, 10vw, 140px)",
                letterSpacing: "0.03em",
              }}
            >
              {project.title}
            </h1>
          </ScrollReveal>
          
          {/* Action Buttons: Live Link / GitHub */}
          {(project.link || project.github) && (
            <ScrollReveal delay={0.2}>
              <div className="mt-8 flex flex-wrap  gap-4">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-xs font-semibold tracking-[0.15em] text-white transition-all hover:bg-white hover:text-[#111]"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    <Globe className="h-4 w-4" />
                    LIVE WEBSITE
                  </a>
                )}
                
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-xs font-semibold tracking-[0.15em] text-white transition-all hover:bg-white hover:text-[#111]"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    <Github className="h-4 w-4" />
                    GITHUB REPO
                  </a>
                )}
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>

      {/* ════════════════════════════════════════════
          INFO GRID
      ════════════════════════════════════════════ */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:px-12 md:py-28">
        <div className="flex flex-col gap-12 md:flex-row md:gap-20">
          {/* Left — Description */}
          <div className="w-full md:w-7/12">
            <ScrollReveal>
              <p
                className="mb-3 text-[10px] font-semibold tracking-[0.35em] uppercase text-white/40"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                // OVERVIEW
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p
                className="text-lg leading-relaxed text-white/70 md:text-xl md:leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {project.description}
              </p>
            </ScrollReveal>
          </div>

          {/* Right — Metadata cards */}
          <div className="w-full md:w-5/12">
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "CLIENT", value: project.client },
                { label: "ROLE", value: project.role },
                { label: "DURATION", value: project.duration },
                { label: "YEAR", value: project.year },
              ].map((meta, i) => (
                <ScrollReveal key={meta.label} direction="right" delay={i * 0.1}>
                  <div className="rounded-xl border border-white/10 bg-white/3 p-5">
                    <p
                      className="mb-2 text-[9px] font-semibold tracking-[0.3em] uppercase text-white/35"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {meta.label}
                    </p>
                    <p
                      className="text-sm font-medium text-white"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {meta.value}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Tools */}
            <ScrollReveal delay={0.4}>
              <div className="mt-4 rounded-xl border border-white/10 bg-white/3 p-5">
                <p
                  className="mb-3 text-[9px] font-semibold tracking-[0.3em] uppercase text-white/35"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  TOOLS
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-white/15 px-3 py-1 text-[10px] font-medium tracking-[0.15em] text-white/70 uppercase"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          HIGHLIGHTS
      ════════════════════════════════════════════ */}
      <section className="mx-auto max-w-6xl px-6 pb-20 md:px-12 md:pb-28">
        <ScrollReveal>
          <p
            className="mb-10 text-[10px] font-semibold tracking-[0.35em] uppercase text-white/40"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            // KEY OUTCOMES
          </p>
        </ScrollReveal>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {project.highlights.map((highlight, i) => (
            <ScrollReveal key={i} delay={i * 0.12}>
              <div className="group flex gap-5 rounded-xl border border-white/8 bg-white/2 p-6 transition-colors hover:border-white/30 hover:bg-white/5">
                <span
                  className="shrink-0 text-3xl font-bold text-white/30 md:text-4xl"
                  style={{
                    fontFamily: "'Anton', sans-serif",
                    letterSpacing: "0.02em",
                  }}
                >
                  0{i + 1}
                </span>
                <p
                  className="text-sm leading-relaxed text-white/60 md:text-base"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {highlight}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>


      {/* ════════════════════════════════════════════
          NEXT / PREV NAVIGATION
      ════════════════════════════════════════════ */}
      <section className="border-t border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Prev */}
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.slug}`}
              className="group flex items-center gap-4 border-b border-white/10 px-6 py-10 transition-colors hover:bg-white/3 md:border-r md:border-b-0 md:px-12"
            >
              <ArrowLeft className="h-5 w-5 shrink-0 text-white/40 transition-colors group-hover:text-white" />
              <div>
                <p
                  className="text-[9px] font-semibold tracking-[0.3em] uppercase text-white/35"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  PREVIOUS PROJECT
                </p>
                <p
                  className="mt-1 text-lg text-white uppercase md:text-xl"
                  style={{
                    fontFamily: "'Anton', sans-serif",
                    letterSpacing: "0.03em",
                  }}
                >
                  {prevProject.title}
                </p>
              </div>
            </Link>
          ) : (
            <div className="hidden border-r border-white/10 md:block" />
          )}

          {/* Next */}
          {nextProject ? (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="group flex items-center justify-end gap-4 px-6 py-10 text-right transition-colors hover:bg-white/3 md:px-12"
            >
              <div>
                <p
                  className="text-[9px] font-semibold tracking-[0.3em] uppercase text-white/35"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  NEXT PROJECT
                </p>
                <p
                  className="mt-1 text-lg text-white uppercase md:text-xl"
                  style={{
                    fontFamily: "'Anton', sans-serif",
                    letterSpacing: "0.03em",
                  }}
                >
                  {nextProject.title}
                </p>
              </div>
              <ArrowUpRight className="h-5 w-5 shrink-0 text-white/40 transition-colors group-hover:text-white" />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </section>
    </main>
  );
}
