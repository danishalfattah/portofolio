import { ImageResponse } from "next/og";
import { getProjectBySlug } from "@/lib/projects";

export const runtime = "edge";

export const alt = "Project — Danish Alfattah";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return new ImageResponse(
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#111",
          color: "white",
          fontSize: "48px",
          fontFamily: "sans-serif",
        }}
      >
        Project Not Found
      </div>,
      { ...size },
    );
  }

  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: "80px",
        background: project.gradient,
        fontFamily: "sans-serif",
        position: "relative",
      }}
    >
      {/* Dark overlay for readability */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.15) 100%)",
          display: "flex",
        }}
      />

      {/* Content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Category & Year */}
        <div
          style={{
            display: "flex",
            fontSize: "14px",
            fontWeight: 600,
            letterSpacing: "0.3em",
            color: "rgba(255,255,255,0.6)",
            textTransform: "uppercase",
            marginBottom: "20px",
          }}
        >
          {project.category} — {project.year}
        </div>

        {/* Title */}
        <div
          style={{
            display: "flex",
            fontSize: "80px",
            fontWeight: 900,
            color: "white",
            lineHeight: 0.95,
            letterSpacing: "-0.01em",
            textTransform: "uppercase",
            marginBottom: "24px",
          }}
        >
          {project.title}
        </div>

        {/* Short description */}
        <div
          style={{
            display: "flex",
            fontSize: "20px",
            fontWeight: 400,
            color: "rgba(255,255,255,0.55)",
            lineHeight: 1.5,
            maxWidth: "700px",
          }}
        >
          {project.description.length > 120
            ? project.description.substring(0, 117) + "..."
            : project.description}
        </div>

        {/* Tools */}
        <div
          style={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
            marginTop: "28px",
          }}
        >
          {project.tools.slice(0, 5).map((tool) => (
            <div
              key={tool}
              style={{
                display: "flex",
                padding: "6px 16px",
                borderRadius: "999px",
                border: "1px solid rgba(255,255,255,0.2)",
                fontSize: "13px",
                fontWeight: 500,
                color: "rgba(255,255,255,0.7)",
                letterSpacing: "0.08em",
              }}
            >
              {tool}
            </div>
          ))}
        </div>
      </div>

      {/* Author attribution */}
      <div
        style={{
          position: "absolute",
          top: "40px",
          right: "80px",
          display: "flex",
          fontSize: "16px",
          fontWeight: 600,
          color: "rgba(255,255,255,0.4)",
          letterSpacing: "0.2em",
        }}
      >
        ✱ DANISH ALFATTAH
      </div>
    </div>,
    {
      ...size,
    },
  );
}
