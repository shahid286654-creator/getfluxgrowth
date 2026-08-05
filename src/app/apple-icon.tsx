import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #a78bfa, #e879f9)",
        }}
      >
        <span
          style={{
            fontSize: 100,
            fontWeight: 700,
            color: "#0a0714",
            fontFamily: "sans-serif",
          }}
        >
          G
        </span>
      </div>
    ),
    { ...size }
  );
}
