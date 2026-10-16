import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

// Open Graph image, rendered once at build time into out/og.png.
export const dynamic = "force-static";

const size = { width: 1200, height: 630 };

const root = process.cwd();

export async function GET() {
  const [tokens, latin, latinExt, dot] = await Promise.all([
    readFile(join(root, "src/brand/tokens.css"), "utf8"),
    // Lexend 600; Turkish ğ and ş live in the latin-ext subset.
    readFile(join(root, "node_modules/@fontsource/lexend/files/lexend-latin-600-normal.woff")),
    readFile(join(root, "node_modules/@fontsource/lexend/files/lexend-latin-ext-600-normal.woff")),
    readFile(join(root, "public/brand/png/dersion-dot-1000.png")),
  ]);

  // Colours come from the brand tokens, never typed by hand.
  const token = (name: string) => {
    const match = tokens.match(new RegExp(`--dersion-${name}:\\s*(#[0-9A-Fa-f]{6})`));
    if (!match) throw new Error(`Token --dersion-${name} not found in tokens.css`);
    return match[1];
  };

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          position: "relative",
          background: token("derin"),
          fontFamily: "Lexend",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: 88,
            color: token("sis"),
            fontSize: 84,
            fontWeight: 600,
            lineHeight: 1,
            letterSpacing: "-0.02em",
          }}
        >
          <span>Takıldığın</span>
          <span>noktadan</span>
          <span>başlar.</span>
        </div>
        <img
          src={`data:image/png;base64,${dot.toString("base64")}`}
          width={470}
          height={470}
          style={{ position: "absolute", right: -70, top: 80 }}
        />
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Lexend", data: latin, weight: 600, style: "normal" },
        { name: "Lexend", data: latinExt, weight: 600, style: "normal" },
      ],
    },
  );
}
