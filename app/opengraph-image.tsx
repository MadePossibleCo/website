import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "MadePossible";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const [display, text] = await Promise.all([
    readFile(join(process.cwd(), "assets/archivo-expanded-800.ttf")),
    readFile(join(process.cwd(), "assets/archivo-500.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          background: "#000",
          color: "#fff",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontFamily: "Archivo",
            fontWeight: 500,
            fontSize: 28,
            color: "#a3a3a3",
          }}
        >
          <span style={{ color: "#fff" }}>MadePossible</span>
          <span>contact@madepossible.ca</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontFamily: "Archivo Expanded",
            fontWeight: 800,
            fontSize: 158,
            lineHeight: 0.8,
            letterSpacing: "-0.015em",
          }}
        >
          <span>MADE</span>
          <span>POSSIBLE.</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Archivo Expanded", data: display, weight: 800, style: "normal" },
        { name: "Archivo", data: text, weight: 500, style: "normal" },
      ],
    },
  );
}
