import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    const year = new Date().getFullYear();
    const month = new Date().getMonth() + 1;
    return [
      {
        source: "/calendar/:country",
        destination: `/calendar/:country/${year}/${month}`,
        permanent: false,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
    ];
  },
};

export default nextConfig;
