/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      appDir: true,
    },
    images: {
      domains: ['alphaapi.ecocare.care', 'api.ecocare.care'],
    },
    env: {
      SHOP_BASE_URL: process.env.SHOP_BASE_URL,
    }
  }
  
  module.exports = nextConfig
  