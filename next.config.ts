import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    loader: "custom",
    loaderFile: "./src/utils/cloudflare-r2-loader.ts",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-687eca05b97b49c3b733ed02bcc0e690.r2.dev", // Your R2 custom domain
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
