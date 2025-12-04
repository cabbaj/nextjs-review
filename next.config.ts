import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL(
        "https://fastly.picsum.photos/id/172/200/200.jpg?hmac=TU8G-y4_SgGNs4TuPhPvRQLvw2TUccb3fVgi-hnIsGE"
      ),
    ],
  },
};

export default nextConfig;
