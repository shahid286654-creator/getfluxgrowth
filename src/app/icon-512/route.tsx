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
          background: "linear-gradient(135deg, #e3c178, #9a7527)",
        }}
      >
        <span
          style={{
            fontSize: 290,
            fontWeight: 700,
            color: "#0a0a0b",
            fontFamily: "sans-serif",
          }}
        >
          G
        </span>
      </div>
    ),
    { width: 512, height: 512 }
  );
}
