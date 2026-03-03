"use client";

import { GitHubCalendar } from "react-github-calendar";

export default function GithubProfileStats() {
  return (
    <div className="mx-auto mt-24 mb-10 max-w-5xl rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm md:p-10 relative overflow-hidden">
      
      {/* Subtle Glow Behind Calendar */}
      <div 
        className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 bg-white/5 opacity-50 blur-3xl pointer-events-none"
        aria-hidden="true" 
      />

      <div className="relative z-10 flex flex-col items-center">
        <h3 
          className="mb-8 text-center text-white uppercase leading-[0.95]"
          style={{ 
            fontFamily: "'Anton', sans-serif", 
            fontSize: "clamp(2rem, 4vw, 36px)",
            letterSpacing: "0.03em" 
          }}
        >
          Github Stats
        </h3>
        
        <div 
          className="w-full flex overflow-x-auto hide-scrollbar text-white/80" 
          style={{ 
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.85rem"
          }}
        >
          <GitHubCalendar 
            username="danishalfattah" 
            colorScheme="dark"
            fontSize={12}
            blockSize={12}
            blockMargin={6}
            labels={{
              totalCount: '{{count}} contributions in the last half year',
            }}
            theme={{
              light: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
              dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'], 
            }}
          />
        </div>
      </div>
    </div>
  );
}
