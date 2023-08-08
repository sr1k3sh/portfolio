/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    // domains: ['res.cloudinary.com'],
    domains: ['storage.googleapis.com','res.cloudinary.com', 'images.unsplash.com'],
    // formats: ['image/avif', 'image/webp'],
    // minimumCacheTTL: 1500000,
  },
  experimental: {
    appDir: true,
    fontLoaders: [
      { loader: "@next/font/google", options: { subsets: ["latin"] } },
    ],
  },
}

module.exports = nextConfig
