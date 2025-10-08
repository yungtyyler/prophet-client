import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fr6q5tatq0wgzfhz.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
