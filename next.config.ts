import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static site: `next build` writes plain HTML/CSS/JS to out/.
  output: "export",
  images: { unoptimized: true },
  poweredByHeader: false,
  // The stylesheet is a few KB: inline it so it doesn't block the first paint.
  experimental: { inlineCss: true },
};

export default nextConfig;
