/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    EMAIL: process.env.EMAIL,
    EMAIL_TO: process.env.EMAIL_TO,
    EMAIL_PASSWORD: process.env.EMAIL_PASSWORD,
  },
};

export default nextConfig;
