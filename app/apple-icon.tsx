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
          background: "#2b34ff",
          position: "relative",
          display: "flex",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 34,
            top: 34,
            width: 93,
            height: 52,
            background: "#f4f5ff",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 53,
            top: 94,
            width: 93,
            height: 52,
            background: "#f4f5ff",
          }}
        />
      </div>
    ),
    size,
  );
}
