import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const ogImageSize = { width: 1200, height: 630 };
export const ogImageContentType = "image/png";

export function buildOgImage(title: string, description: string) {
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
          padding: 80,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              display: "flex",
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "linear-gradient(135deg, #a78bfa, #e879f9)",
            }}
          />
          <div style={{ fontSize: 36, fontWeight: 700, color: "white" }}>
            {siteConfig.name}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 56,
            fontWeight: 700,
            color: "white",
            textAlign: "center",
            maxWidth: 1000,
          }}
        >
          {title}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#c4b5fd",
            textAlign: "center",
            maxWidth: 900,
            marginTop: 20,
          }}
        >
          {description}
        </div>
      </div>
    ),
    { ...ogImageSize }
  );
}
