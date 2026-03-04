"use client";


import RotatingText from "./RotatingText";
import LogoLoop from "./LogoLoop";

const techStack = [
  { name: "REACT", url: "https://cdn.simpleicons.org/react/ffffff" },
  { name: "NEXT.JS", url: "https://cdn.simpleicons.org/nextdotjs/ffffff" },
  { name: "FIREBASE", url: "https://cdn.simpleicons.org/firebase/ffffff" },
  { name: "TAILWIND CSS", url: "https://cdn.simpleicons.org/tailwindcss/ffffff" },
  { name: "NODE.JS", url: "https://cdn.simpleicons.org/nodedotjs/ffffff" },
  { name: "EXPRESS.JS", url: "https://cdn.simpleicons.org/express/ffffff" },
  { name: "MONGODB", url: "https://cdn.simpleicons.org/mongodb/ffffff" },
  { name: "TYPESCRIPT", url: "https://cdn.simpleicons.org/typescript/ffffff" },
];

export default function HeroSection() {
  const roles = [
    "SOFTWARE DEV",
    "FULL STACK DEV",
    "FRONT END DEV",
    "INFORMATICS STUDENT",
  ];

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #111 0%, #1a1a1a 100%)",
      }}
    >
      {/* ────────── AMBIENT BACKGROUND ────────── */}
      {/* Faint watermark name */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center select-none"
      >
        <span
          className="whitespace-nowrap text-white text-[28vw] leading-none uppercase"
          style={{
            fontFamily: "'Anton', sans-serif",
            opacity: 0.05,
            filter: "blur(4px)",
          }}
        >
          DANISH
        </span>
      </div>

      {/* Glowing blob — bottom‑right */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 bottom-0 z-0 h-[300px] w-[300px] rounded-full opacity-30 mix-blend-screen"
        style={{ background: "#444", filter: "blur(80px)" }}
      />
      {/* Glowing blob — bottom‑left */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 z-0 h-[300px] w-[600px] rounded-full opacity-30 mix-blend-screen"
        style={{ background: "#333", filter: "blur(80px)" }}
      />



      {/* ────────── MAIN HERO CONTENT ────────── */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 md:px-12">
        {/* Massive headline */}
        <h1
          className="z-10 flex flex-col items-center justify-center text-center text-white uppercase leading-[0.9]"
          style={{
            fontFamily: "'Anton', sans-serif",
            fontSize: "clamp(3.5rem, 10vw, 160px)",
            letterSpacing: "0.04em",
          }}
        >
          <RotatingText
            texts={roles}
            mainClassName="overflow-hidden px-2 sm:px-4 justify-center"
            staggerFrom="first"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-120%", opacity: 0 }}
            staggerDuration={0.02}
            splitLevelClassName="overflow-hidden pb-2 sm:pb-4"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={3000}
          />
        </h1>



        {/* ────── Floating elements ────── */}

        {/* Bottom‑left intro — positioned absolutely anchored to bottom left */}
        <div className="absolute bottom-28 left-6 z-10 w-full max-w-[280px] text-left text-white md:bottom-28 md:left-12 md:max-w-xs">
          <p
            className="mb-1 text-[10px] font-semibold tracking-[0.3em] uppercase opacity-40"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            // INTRODUCTION
          </p>
          <p
            className="text-sm leading-relaxed font-light text-white/70"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            I&apos;m <strong className="font-semibold text-white">Danish</strong> — a
            Software Engineering enthusiast crafting high‑performance digital
            experiences.
          </p>
        </div>

        
      </div>

      {/* ────────── BRAND STRIP ────────── */}
      <div className="absolute right-0 bottom-0 left-0 z-10 border-t border-white/10 py-5">
        <LogoLoop
          logos={techStack.map((tech) => ({
            node: (
              <div className="flex items-center gap-3 opacity-40 transition-opacity duration-300 hover:opacity-100">
                <img 
                  src={tech.url} 
                  alt={`${tech.name} logo`} 
                  className="h-6 w-6 object-contain" 
                  aria-hidden="true"
                />
                <span
                  className="text-sm font-semibold tracking-[0.25em] text-white uppercase whitespace-nowrap select-none"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {tech.name}
                </span>
              </div>
            ),
          }))}
          speed={30}
          logoHeight={24}
          gap={80}
          pauseOnHover={true}
        />
      </div>
    </section>
  );
}
