/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    disableStaticImages: true,
  },
  // env: {
  //   NEXT_PUBLIC_GOOGLE_ANALYTICS: "G-XV0NSGSYS3",
  //   NEXT_PUBLIC_BASE_URL: "https://farischt.github.io",
  // },
}

module.exports = nextConfig
