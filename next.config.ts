import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: ['./public/scss'],
  },
};

export default nextConfig;
