import type { NextConfig } from "next";

const repositoryName = "portfolio";
const isProductionBuild = process.env.NODE_ENV === "production";
const basePath = isProductionBuild ? `/${repositoryName}` : "";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["http://localhost:3000", "192.168.1.123"],
  assetPrefix: basePath || undefined,
  basePath: basePath || undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
  output: "export",
  trailingSlash: true,
};

export default nextConfig;
