/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_EMAIL: process.env.EMAIL,
    NEXT_PUBLIC_EMAIL_TO: process.env.EMAIL_TO,
    NEXT_PUBLIC_EMAIL_PASSWORD: process.env.EMAIL_PASSWORD,
  },
};

export default nextConfig;
