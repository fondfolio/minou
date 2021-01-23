module.exports = {
  webpack: (config, {isServer}) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: 'empty',
      };
    }

    return config;
  },
  env: {
    GRAPHQL_ACCESS_TOKEN: process.env.GRAPHQL_ACCESS_TOKEN,
  },
};
