import { ImageResponse } from "next/og";

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
          backgroundColor: "#0b1328",
          backgroundImage:
            "radial-gradient(circle at 50% 30%, rgba(59,130,246,0.45), rgba(10,7,20,0) 60%)",
          fontFamily: "sans-serif",
          padding: 80,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            fontSize: 40,
            letterSpacing: "-0.045em",
            lineHeight: 1,
            marginBottom: 44,
          }}
        >
          <span style={{ fontWeight: 300, color: "rgba(255,255,255,0.55)" }}>get</span>
          <span style={{ fontWeight: 600, color: "white" }}>flux</span>
          <span style={{ fontWeight: 300, color: "white" }}>growth</span>
          <span
            style={{
              width: 10,
              height: 10,
              marginLeft: 3,
              marginBottom: 5,
              borderRadius: "50%",
              background: "#3b82f6",
            }}
          />
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
            color: "#9cc3ff",
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
