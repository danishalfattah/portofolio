"use client";

import { ArrowUpRight, Mail, Github, Linkedin, Instagram, Download } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const socials = [
  { icon: Github, label: "GITHUB", href: "https://github.com/danishalfattah" },
  { icon: Linkedin, label: "LINKEDIN", href: "https://www.linkedin.com/in/danishalfattah/" },
  { icon: Instagram, label: "INSTAGRAM", href: "https://www.instagram.com/danishalfattah/" },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden py-24 md:py-36"
      style={{ background: "#0a0a0a" }}
    >
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 left-1/2 z-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full opacity-8"
        style={{ background: "#444", filter: "blur(120px)" }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center md:px-12">
        {/* Label */}
        <ScrollReveal>
          <p
            className="mb-4 text-[10px] font-semibold tracking-[0.35em] uppercase text-white/40"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            // GET IN TOUCH
          </p>
        </ScrollReveal>

        {/* Headline */}
        <ScrollReveal delay={0.1}>
          <h2
            className="mb-6 text-white uppercase leading-[0.95]"
            style={{
              fontFamily: "'Anton', sans-serif",
              fontSize: "clamp(2.5rem, 8vw, 96px)",
              letterSpacing: "0.03em",
            }}
          >
            LET&apos;S WORK
            <br />
            <span className="text-white/50">TOGETHER</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p
            className="mx-auto mb-12 max-w-md text-base leading-relaxed text-white/40"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Have a project in mind or just want to say hello? I&apos;m always
            open to new ideas and collaborations.
          </p>
        </ScrollReveal>

        {/* Action Buttons */}
        <ScrollReveal delay={0.3}>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            {/* Email CTA */}
            <a
              href="mailto:danishalfattah25@gmail.com"
              className="group inline-flex w-full items-center justify-center gap-4 rounded-full border-2 border-white/15 px-6 py-4 transition-all duration-300 hover:border-white hover:bg-white sm:w-auto sm:px-8"
            >
              <Mail className="h-5 w-5 text-white/50 transition-colors group-hover:text-[#111]" />
              <span
                className="text-xs font-semibold tracking-[0.2em] text-white  transition-colors group-hover:text-[#111] sm:text-sm"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                danishalfattah25@gmail.com
              </span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 transition-all duration-300 group-hover:border-[#111]/20 group-hover:bg-[#111]">
                <ArrowUpRight className="h-3.5 w-3.5 text-white transition-colors group-hover:text-white" />
              </span>
            </a>

            {/* Download CV CTA */}
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full border-2 border-white/15 bg-white/5 px-6 py-4 transition-all duration-300 hover:border-white hover:bg-white/10 sm:w-auto sm:px-8"
            >
              <Download className="h-4 w-4 text-white" />
              <span
                className="text-xs font-semibold tracking-[0.2em] text-white uppercase sm:text-sm"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                DOWNLOAD CV
              </span>
            </a>
          </div>
        </ScrollReveal>

        {/* Social Links */}
        <ScrollReveal delay={0.4}>
          <div className="mt-16 flex items-center justify-center gap-6">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-white/30 transition-colors hover:text-white"
              >
                <social.icon className="h-4 w-4" />
                <span
                  className="text-[10px] font-medium tracking-[0.2em] uppercase"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {social.label}
                </span>
              </a>
            ))}
          </div>
        </ScrollReveal>
        {/* Divider + Footer */}
        <ScrollReveal delay={0.5}>
          <div className="mt-20 border-t border-white/10 pt-8">
            <div className="flex flex-col items-center justify-center gap-4 md:flex-row ">
              <p
                className="text-xs  tracking-[0.2em] text-white/20 uppercase"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                © 2025 DANISH ALFATTAH. ALL RIGHTS RESERVED.
              </p>
          
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
