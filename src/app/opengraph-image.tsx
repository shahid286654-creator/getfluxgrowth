import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0714",
          backgroundImage:
            "radial-gradient(circle at 50% 30%, rgba(147,51,234,0.45), rgba(10,7,20,0) 60%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 32,
          }}
        >
          <div
            style={{
              display: "flex",
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "linear-gradient(135deg, #a78bfa, #e879f9)",
            }}
          />
          <div style={{ fontSize: 48, fontWeight: 700, color: "white" }}>
            {siteConfig.name}
          </div>
        </div>
        <div
          style={{
            fontSize: 32,
            color: "#c4b5fd",
            textAlign: "center",
            maxWidth: 900,
          }}
        >
          {siteConfig.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
