/** @type {import('next').NextConfig} */
const nextConfig = {
    poweredByHeader: false,
    async rewrites() {
      return [
        {
          source: '/:any*',
          destination: '/',
        },
      ];
    },
}

module.exports = nextConfig
