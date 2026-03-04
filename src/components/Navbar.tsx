"use client";

import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled more than 50px
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 z-50 flex w-full items-center justify-between px-6 transition-all duration-300 ease-in-out md:px-12",
        isScrolled
          ? "bg-[#111]/80 py-3 shadow-lg backdrop-blur-md md:py-4 border-b border-white/10"
          : "bg-transparent py-5 md:py-7 border-b border-transparent"
      )}
    >
      {/* Logo */}
      <a
        href="#"
        className="text-sm font-semibold tracking-[0.25em] text-white uppercase"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        ✱ DANISH
      </a>

      {/* Center links (desktop only) */}
      <ul className="hidden items-center gap-8 md:flex">
        {["ABOUT", "PROJECTS", "CONTACT"].map((link) => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase()}`}
              className="text-xs font-medium tracking-[0.2em] text-white/70 uppercase transition-opacity hover:text-white"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

      {/* Hire Me CTA */}
      <div className="flex items-center gap-3">
        <span
          className="hidden text-xs font-medium tracking-[0.2em] text-white/70 uppercase sm:inline"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          // CONTACT ME
        </span>
        <a
          href="#contact"
          className="group flex h-10 w-10 items-center justify-center rounded-full border-2 border-white/40 transition-colors duration-300 hover:bg-white"
        >
          <ArrowUpRight className="h-4 w-4 text-white transition-colors duration-300 group-hover:text-[#111]" />
        </a>
      </div>
    </nav>
  );
}
