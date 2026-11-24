import { ImageResponse } from "next/og";

// "f." monogram matching the wordmark: white lowercase f with the blue full stop.
// Apple and Android round icons themselves, so only the browser favicon gets its own corners.
export function brandIcon(size: number, { rounded = false } = {}) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0b1328",
          borderRadius: rounded ? size * 0.22 : 0,
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-end" }}>
          <span
            style={{
              fontSize: size * 0.7,
              fontWeight: 600,
              lineHeight: 1,
              letterSpacing: "-0.04em",
              color: "#f5f7ff",
              fontFamily: "sans-serif",
            }}
          >
            f
          </span>
          <span
            style={{
              width: size * 0.15,
              height: size * 0.15,
              marginLeft: size * 0.02,
              marginBottom: size * 0.07,
              borderRadius: "50%",
              background: "#3b82f6",
            }}
          />
        </div>
      </div>
    ),
    { width: size, height: size }
  );
}
