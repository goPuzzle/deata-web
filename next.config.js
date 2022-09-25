/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

const getAssetPrefix = () => {
  return `https://db6slatk8f40s.cloudfront.net/${NEXT_PUBLIC_COMMIT_SHA}`;
};

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: getAssetPrefix(),
}