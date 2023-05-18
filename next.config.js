/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: '.',
  images: {
    domains: ["localhost", "*"],

  },
  images: {
    loader: 'akamai',
    path: '/',
  },
  basePath:''
  
}
module.exports = nextConfig
