/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "xpertcards-bucket.s3.amazonaws.com",
        port: "",
        pathname: "/media/b2.PNG",
      },
    ],
  },
};

module.exports = nextConfig;
