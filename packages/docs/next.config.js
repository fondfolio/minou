const path = require('path');

const withTM = require('next-transpile-modules')([
  path.resolve(__dirname, '../minou'),
]);

module.exports = withTM({
  target: 'serverless',
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      minou: path.resolve(__dirname, '../minou'),
    };
    return config;
  },
});
