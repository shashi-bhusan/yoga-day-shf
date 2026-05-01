import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    /** Allow GalleryMasonry + event highlights to use distinct quality values (Next 16 default is [75] only). */
    qualities: [75, 88],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
