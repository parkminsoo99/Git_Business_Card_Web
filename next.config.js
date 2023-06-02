/** @type {import('next').NextConfig} */
// const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  // reactStrictMode: true,
  // assetPrefix: isProd ? 'http://localhost:3000/auth/login' : undefined,
  assetPrefix: '.',
  // images: {
  //   domains: ["localhost", "*"],
  // },
  images: {
    loader: 'akamai',
    path: '/',
},
  
}
module.exports = nextConfig
