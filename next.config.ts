/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_ACTIONS || false;

const nextConfig = {
  output: 'export',
  basePath: isGithubPages ? '/Developer_Portfolio' : '',
  assetPrefix: isGithubPages ? '/Developer_Portfolio/' : '',
};

module.exports = nextConfig;
