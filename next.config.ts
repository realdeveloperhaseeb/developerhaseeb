import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Build a fully static site into `out/` so it can be hosted on any
  // web server (Hostinger shared hosting, Apache, Nginx, etc.) without a
  // Node.js runtime or framework auto-detection.
  output: "export",

  // The default `next/image` optimizer needs a server; disable it so images
  // are emitted as-is during the static export.
  images: {
    unoptimized: true,
  },

  // Emit `/route/index.html` instead of `/route.html` so static hosts resolve
  // clean URLs without custom rewrite rules.
  trailingSlash: true,
};

export default nextConfig;
