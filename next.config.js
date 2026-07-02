module.exports = {
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return [
      {
        source: "/search",
        destination: "/editorial/search",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
};
