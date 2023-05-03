/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.pinimg.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
        port: '',
        pathname: '',
      },
    ],
  }
}

module.exports = nextConfig
