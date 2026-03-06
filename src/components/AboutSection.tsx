"use client";

import ScrollReveal from "./ScrollReveal";
import ProfileCard from "./ProfileCard";
import GithubProfileStats from "./GithubProfileStats";

const skills = [
  "React",
  "Next.js",
  "Tailwind CSS",
  "TypeScript",
  "Java",
  "Kotlin",
  "Figma",
  "Express.js",
  "Node.js",
  "MongoDB",
  "Firebase",
  "Git",
];

const stats = [
  { value: "2x", label: "Web Dev Champion" },
  { value: "5+", label: "Projects Built" },
  { value: "1+", label: "Years Experience" },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden py-24 md:py-36"
      style={{ background: "#0a0a0a" }}
    >
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 z-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full opacity-10"
        style={{ background: "#555", filter: "blur(120px)" }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-12">
        {/* Section label */}
        <ScrollReveal>
          <p
            className="mb-4 text-[10px] font-semibold tracking-[0.35em] uppercase text-white/40"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            // ABOUT ME
          </p>
        </ScrollReveal>

        <div className="grid  grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Left — Portrait with Profile Card */}
          <ScrollReveal
            direction="left"
            className="w-full lg:col-span-5 relative z-10"
          >
            <PortraitSpotlight />
          </ScrollReveal>

          {/* Right — Text */}
          <div className="w-full lg:col-span-7 relative z-20">
            <ScrollReveal direction="right">
              <h2
                className="mb-6 text-white uppercase leading-[0.95]"
                style={{
                  fontFamily: "'Anton', sans-serif",
                  fontSize: "clamp(2.5rem, 6vw, 72px)",
                  letterSpacing: "0.03em",
                }}
              >
                I BUILD
                <br />
                <span className="text-white/50">SOLUTIONS</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.15}>
              <p
                className="mb-8 max-w-lg text-base leading-relaxed text-white/50"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                I am a Software Engineering enthusiast focused on crafting
                high-performance digital experiences. With a strong foundation
                in Computer Science and hands-on experience in full-stack
                development, I prioritize building scalable and maintainable
                solutions that effectively address real-world challenges.
              </p>
            </ScrollReveal>

            {/* Skills */}
            <ScrollReveal direction="right" delay={0.25}>
              <div className="mb-10 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/15 px-4 py-1.5 text-[11px] font-medium tracking-[0.15em] text-white/60 uppercase transition-colors hover:border-white/50 hover:text-white"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </ScrollReveal>

            {/* Stats */}
            <ScrollReveal direction="up" delay={0.35}>
              <div className="flex gap-10">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p
                      className="text-3xl font-bold text-white md:text-4xl"
                      style={{
                        fontFamily: "'Anton', sans-serif",
                        letterSpacing: "0.02em",
                      }}
                    >
                      {stat.value}
                    </p>
                    <p
                      className="mt-1 text-[10px] font-medium tracking-[0.2em] text-white/30 uppercase"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* GitHub Contribution Calendar */}
        <ScrollReveal direction="up" delay={0.4} className="w-full">
          <GithubProfileStats />
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ────────── Portrait wrapper ────────── */
function PortraitSpotlight() {
  return (
    <div className="mx-auto flex w-full max-w-sm justify-center">
      <ProfileCard
        avatarUrl="/hero-portrait.png"
        name=" "
        title=" "
        showUserInfo={false}
        innerGradient="linear-gradient(145deg,rgba(10,10,10,0.8) 0%,rgba(30,30,30,0.4) 100%)"
        behindGlowColor="rgba(255, 255, 255, 0.15)"
        behindGlowEnabled
        className="w-full"
      />
    </div>
  );
}
