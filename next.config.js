/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'localhost',
      'openweathermap.org',
      'panel.connermurphy.net'
    ]
  }
}

module.exports = nextConfig
