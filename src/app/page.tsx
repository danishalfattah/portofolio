import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://danishalfattah.site/#website",
      url: "https://danishalfattah.site",
      name: "Muhammad Danish Alfattah Lubis",
      description:
        "Portfolio of Muhammad Danish Alfattah Lubis — Informatics Engineering at University of Brawijaya.",
      publisher: {
        "@id": "https://danishalfattah.site/#person",
      },
    },
    {
      "@type": "Person",
      "@id": "https://danishalfattah.site/#person",
      name: "Muhammad Danish Alfattah Lubis",
      url: "https://danishalfattah.site",
      jobTitle: "Software Developer",
      description:
        "Informatics Engineering Student at University of Brawijaya specializing in web and mobile development.",
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "University of Brawijaya",
      },
      sameAs: [
        "https://github.com/danishalfattah",
        "https://www.linkedin.com/in/danishalfattah/",
        "https://www.instagram.com/danishalfattah/",
      ],
      knowsAbout: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Kotlin",
        "Node.js",
        "Firebase",
        "MongoDB",
      ],
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
