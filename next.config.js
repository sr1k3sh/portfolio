/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    // domains: ['res.cloudinary.com'],
    domains: ['storage.googleapis.com','res.cloudinary.com'],
    // formats: ['image/avif', 'image/webp'],
    // minimumCacheTTL: 1500000,
  },
}

module.exports = nextConfig
