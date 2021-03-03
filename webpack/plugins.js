const path = require('path');
const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const HtmlWebpackInlinePlugin = require('html-webpack-inline-plugin').default;
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const VirtualModulesPlugin = require('webpack-virtual-modules');

const getBrowserRegexp = require('./browser-regexp');
const { BROWSER_TYPES } = require('../build/global/environments');

module.exports = (env) => {
  return [
    // Establishes environment var for things like redux
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env),
    }),
    // Copy assets to build folder
    new CopyPlugin({
      patterns: [
        {
          from: 'node_modules/resume-md/images/**/*',
          to({ context, absoluteFilename }) {
            const nodePath = 'images\\';
            const outputPath = `assets/resume/${absoluteFilename.slice(
              absoluteFilename.indexOf(nodePath)
            )}`;

            return outputPath;
          },
        },
        {
          from: 'node_modules/resume-md/fonts/**/*',
          to({ context, absoluteFilename }) {
            const nodePath = 'fonts\\';
            const outputPath = `assets/resume/${absoluteFilename.slice(
              absoluteFilename.indexOf(nodePath)
            )}`;

            return outputPath;
          },
        },
        { from: 'node_modules/resume-md/resume.css', to: 'assets/resume' },
        {
          from:
            'assets/icons/(react|firefox|microsoft-edge|apple-safari|language-javascript|google-chrome).svg',
          to: '',
        },
      ],
    }),
    // Main Page
    new HtmlWebpackPlugin({
      chunks: ['browser-check', 'main'],
      chunksSortMode: 'manual',
      filename: 'index.html',
      inject: true,
      minify: {
        collapseInlineTagWhitespace: true,
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
      },
      template: path.resolve(__dirname, '../index.html'),
      title: 'O.P Portfolio',
    }),
    // Unsupported Browsers Page
    new HtmlWebpackPlugin({
      chunks: ['unsupported'],
      filename: 'unsupported-browser.html',
      inject: true,
      minify: {
        collapseInlineTagWhitespace: true,
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
      },
      template: path.resolve(__dirname, '../unsupported-browser.html'),
      title: 'Unsupported | O.P Portfolio',
    }),
    new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i }),
    new CompressionPlugin({
      test: /\.(js|s?css|html|svg|json)$/,
    }),
    // Unsupported Browsers Page
    new VirtualModulesPlugin({
      SUPPORTED_MOBILE_BROWSERS: getBrowserRegexp(BROWSER_TYPES.MOBILE),
      SUPPORTED_WEB_BROWSERS: getBrowserRegexp(BROWSER_TYPES.WEB),
    }),
  ];
};
