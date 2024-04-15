/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: false,   
   swcMinify: false,   
   distDir: 'build',
   env: {
      SERVER_URL: process.env.SERVER_URL,
      APP_URL: process.env.APP_URL,
   },
   images: {
      remotePatterns: [
         {
            protocol: "https",
            hostname: "**",
         },
      ],
   },
};

module.exports = nextConfig;
