import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Danish Alfattah — Software Developer & Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "80px",
        background:
          "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #111111 100%)",
        fontFamily: "sans-serif",
      }}
    >
      {/* Decorative elements */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          right: "-100px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)",
          display: "flex",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-50px",
          left: "-50px",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)",
          display: "flex",
        }}
      />

      {/* Top label */}
      <div
        style={{
          display: "flex",
          fontSize: "14px",
          fontWeight: 600,
          letterSpacing: "0.3em",
          color: "rgba(255,255,255,0.5)",
          textTransform: "uppercase",
          marginBottom: "24px",
        }}
      >
        ✱ PORTFOLIO
      </div>

      {/* Name */}
      <div
        style={{
          display: "flex",
          fontSize: "72px",
          fontWeight: 900,
          color: "white",
          lineHeight: 1,
          letterSpacing: "-0.02em",
          marginBottom: "16px",
        }}
      >
        DANISH ALFATTAH
      </div>

      {/* Role */}
      <div
        style={{
          display: "flex",
          fontSize: "28px",
          fontWeight: 400,
          color: "rgba(255,255,255,0.6)",
          marginBottom: "40px",
        }}
      >
        Informatics Engineering Student
      </div>

      {/* Domain */}
      <div
        style={{
          position: "absolute",
          bottom: "40px",
          right: "80px",
          display: "flex",
          fontSize: "16px",
          fontWeight: 500,
          color: "rgba(255,255,255,0.3)",
          letterSpacing: "0.15em",
        }}
      >
        danishalfattah.site
      </div>
    </div>,
    {
      ...size,
    },
  );
}
