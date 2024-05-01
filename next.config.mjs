/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    EMAIL: process.env.EMAIL,
    EMAIL_TO: process.env.EMAIL_TO,
    EMAIL_PASSWORD: process.env.EMAIL_PASSWORD,
    NEXT_PUBLIC_RED_CODE: process.env.RED_CODE,
    NEXT_PUBLIC_BLUE_CODE: process.env.BLUE_CODE,
    NEXT_PUBLIC_GREEN_CODE: process.env.GREEN_CODE,
    NEXT_PUBLIC_YELLOW_CODE: process.env.YELLOW_CODE,
  },
};

export default nextConfig;
