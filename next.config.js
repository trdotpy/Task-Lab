/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "res.cloudinary.com",
      "lh3.googleusercontent.com",
      "s.gravatar.com",
      "images.pexels.com",
    ],
  },
};

module.exports = nextConfig;
