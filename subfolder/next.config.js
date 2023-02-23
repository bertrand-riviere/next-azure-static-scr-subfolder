const nextConfig = {
  output: 'standalone',
  eslint: {
    // lint is made separately
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
