/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ["pages", "utils"],
  },
  images: {
    domains: [
      "dummyimage.com",
      "www.google.com",
      "i.pinimg.com",
      "eshop-tcj.netlify.app",
      "https://encrypted-tbn0.gstatic.com",
    ],
  },
};

export default nextConfig;
