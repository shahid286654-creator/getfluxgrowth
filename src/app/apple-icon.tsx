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
          background: "linear-gradient(135deg, #e3c178, #9a7527)",
        }}
      >
        <span
          style={{
            fontSize: 100,
            fontWeight: 700,
            color: "#0a0a0b",
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
