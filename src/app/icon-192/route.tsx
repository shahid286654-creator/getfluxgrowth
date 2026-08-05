import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export async function GET() {
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
            fontSize: 108,
            fontWeight: 700,
            color: "#0a0714",
            fontFamily: "sans-serif",
          }}
        >
          G
        </span>
      </div>
    ),
    { width: 192, height: 192 }
  );
}
