
const { NEXT_PUBLIC_COMMIT_SHA } = process.env;

const getAssetPrefix = () => {
  return `https://db6slatk8f40s.cloudfront.net/${NEXT_PUBLIC_COMMIT_SHA}`;
};

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: getAssetPrefix(),
}