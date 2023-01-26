module.exports = {
  async redirects() {
    return [
      {
        source: '/search',
        destination: '/editorial/search',
        permanent: true,
      },
    ];
  },
  images: {
    domains: ['cdn.sanity.io'],
    unoptimized: true,
  }
};
