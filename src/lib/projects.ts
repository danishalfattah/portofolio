export interface Project {
    slug: string;
    title: string;
    category: string;
    year: string;
    gradient: string;
    thumbnail?: string; // Optional thumbnail image path
    description: string;
    client: string;
    role: string;
    duration: string;
    tools: string[];
    highlights: string[];
    link?: string; // Optional live website link
    github?: string; // Optional GitHub repository link
}

export const projects: Project[] = [
    {
        slug: "cvjitu",
        title: "CVJITU",
        category: "WEB APP · AI",
        year: "2025",
        gradient: "linear-gradient(135deg, #333 0%, #1a1a1a 50%, #555 100%)",
        thumbnail: "/projects/cvjitu-thumb.png",
        description:
            "Developed an intelligent platform designed to optimize job applications. The system leverages Google Gemini AI to analyze resumes against job descriptions, providing real-time scoring (0-100) and actionable feedback. It features a dynamic PDF generation engine that creates ATS-friendly resumes instantly, streamlining the job-seeking process with modern automation.",
        client: "Personal Project",
        role: "Fullstack Developer",
        duration: "2 months",
        tools: ["Next.js", "TypeScript", "Google Gemini API", "Firebase", "React PDF"],
        highlights: [
            "Built AI-powered CV analysis engine with real-time scoring (0-100) and actionable feedback",
            "Implemented dynamic PDF generation engine for ATS-friendly resumes",
            "Leveraged Google Gemini AI to analyze resumes against job descriptions",
            "Achieved fast page loads with optimized SSR and caching strategies",
        ],
        link: "https://cvjitu.vercel.app",
        github: "https://github.com/danishalfattah/cvjitu",
    },
    {
        slug: "lapor-warga",
        title: "LAPOR WARGA",
        category: "WEB APP · CIVIC TECH",
        year: "2025",
        gradient: "linear-gradient(135deg, #111 0%, #2a2a2a 50%, #444 100%)",
        thumbnail: "/projects/lapor-warga-thumb.png",
        description:
            "Designed and developed a high-fidelity frontend prototype for a citizen reporting system. The project focuses on advanced UI/UX patterns, utilizing a custom Glassmorphism design system and smooth animations with Framer Motion. It features an interactive map interface for pinning report locations, ensuring a seamless and responsive user experience across devices.",
        client: "Community Project",
        role: "Frontend Engineer",
        duration: "1 months",
        tools: ["Next.js", "Framer Motion", "Google Maps API", "Tailwind CSS"],
        highlights: [
            "Designed custom Glassmorphism design system with advanced UI/UX patterns",
            "Built interactive map interface for pinning report locations using Google Maps API",
            "Implemented smooth page transitions and micro-animations with Framer Motion",
            "Created responsive, mobile-first reporting flow for community accessibility",
        ],
        link: "https://lapor-warga.vercel.app/",
        github: "https://github.com/danishalfattah/lapor-warga",
    },
    {
        slug: "vgym",
        title: "VGYM",
        category: "WEB APP · 3D",
        year: "2024",
        gradient: "linear-gradient(135deg, #444 0%, #222 50%, #111 100%)",
        thumbnail: "/projects/vgym-thumb.png",
        description:
            "Created an immersive 3D web experience for showcasing gym equipment. Leveraging Astro's Island Architecture, the project achieves high-performance loading scores while rendering complex 3D models interactively in the browser. It demonstrates advanced skills in WebGL and creative coding, bridging the gap between web performance and high-fidelity visuals.",
        client: "Academic Project",
        role: "Frontend Developer",
        duration: "2 months",
        tools: ["Astro", "React Three Fiber (R3F)", "Three.js", "WebGL"],
        highlights: [
            "Built interactive 3D gym equipment models with real-time rotation and zoom",
            "Leveraged Astro's Island Architecture for high-performance loading scores",
            "Rendered complex 3D models interactively in the browser using WebGL",
            "Optimized 3D asset loading for fast initial page render",
        ],
        link: "https://vgym.ahargunyllib.dev/",
        github: "https://github.com/ahargunyllib/vgym",
    },
    {
        slug: "growth",
        title: "GROWTH",
        category: "MOBILE APP · SUSTAINABILITY",
        year: "2024",
        gradient: "linear-gradient(135deg, #222 0%, #111 50%, #3a3a3a 100%)",
        thumbnail: "/projects/growth-thumb.png",
        description:
            "Engineered a native Android application that promotes environmental sustainability through gamification. Users earn points by depositing waste, which they can exchange for rewards. The app integrates real-time QR code scanning and Google Maps for locating nearby waste deposit partners.",
        client: "Academic Project",
        role: "Android Developer",
        duration: "3 months",
        tools: ["Kotlin", "Jetpack Compose", "Firebase", "Google Maps SDK", "ZXing (QR)"],
        highlights: [
            "Built gamified waste deposit system with points and reward exchange",
            "Integrated Google Maps SDK for locating nearby waste deposit partners",
            "Implemented real-time QR code scanning using ZXing library",
            "Designed modern Material UI with Jetpack Compose",
        ],
        github: "https://github.com/ahargunyllib/growth",
    },
    {
        slug: "website-desa-slamparejo",
        title: "DESA SLAMPAREJO",
        category: "WEB · CMS",
        year: "2024",
        gradient: "linear-gradient(135deg, #1a1a1a 0%, #333 50%, #222 100%)",
        thumbnail: "/projects/desa-thumb.png",
        description:
            "Led the digital transformation initiative for Slamparejo Village during the Community Service Program (KKN). Developed a responsive official website with a custom Content Management System (CMS), empowering village officials to manage news, administrative data, and public information independently without technical assistance. This project improved information transparency and public service accessibility.",
        client: "Desa Slamparejo",
        role: "Fullstack Developer",
        duration: "1 months",
        tools: ["Next.js", "Custom CMS", "REST API"],
        highlights: [
            "Built custom CMS enabling non-technical village staff to manage content independently",
            "Led digital transformation during Community Service Program (KKN)",
            "Improved information transparency and public service accessibility",
            "Created mobile-responsive design reaching village population",
        ],
        link: "https://desaslamparejo.id/",
    },
    {
        slug: "vestra",
        title: "VESTRA",
        category: "WEB APP · FINTECH",
        year: "2024",
        gradient: "linear-gradient(135deg, #555 0%, #1a1a1a 50%, #333 100%)",
        thumbnail: "/projects/vestra-thumb.png",
        description:
            "Built a comprehensive financial literacy and management application aimed at Gen Z. The platform features intuitive budgeting tools, expense tracking, and interactive data visualization to help users understand their cash flow. Implemented complex logic for financial health scoring and goal tracking, demonstrating a strong grasp of fintech product requirements.",
        client: "Academic Project",
        role: "Frontend Engineer",
        duration: "1 months",
        tools: ["Next.js", "TypeScript", "Tailwind CSS"],
        highlights: [
            "Built intuitive budgeting tools and expense tracking features",
            "Implemented interactive data visualization for cash flow understanding",
            "Created financial health scoring and goal tracking logic",
            "Designed Gen Z-focused UI with modern, engaging aesthetics",
        ],
        link: "https://vestra-intechfest.vercel.app/",
    },
];

export function getAllProjects(): Project[] {
    return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find((p) => p.slug === slug);
}
