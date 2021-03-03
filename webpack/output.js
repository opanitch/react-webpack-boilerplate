const path = require('path');

module.exports = (env) => ({
  chunkFilename: 'bundles/[name].chunk.js',
  filename: 'bundles/[name].bundle.js',
  path: path.resolve(__dirname, '../public'),
  publicPath: '/',
});
