/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname:
          "8xsca0xnzcvircvx.public.blob.vercel-storage.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
