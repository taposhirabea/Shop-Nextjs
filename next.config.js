/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // target: 'serverless',
  images: {
    domains: ["cdn.pixabay.com"],
    //  domains: ['firebasestorage.googleapis.com'],
  },
}

module.exports = nextConfig
