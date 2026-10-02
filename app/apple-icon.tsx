import { ImageResponse } from "next/og";
import { MARK_BOTTOM, MARK_TOP, MARK_VIEWBOX } from "./mark";

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
          background: "#000",
        }}
      >
        <svg width={106} height={100} viewBox={MARK_VIEWBOX}>
          <path d={MARK_TOP} fill="#fff" />
          <path d={MARK_BOTTOM} fill="#fff" />
        </svg>
      </div>
    ),
    size,
  );
}
