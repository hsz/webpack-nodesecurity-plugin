const path = require('path');
const webpack = require('webpack');

const WebpackNodeSecurityPlugin = require('../index');

module.exports = function(options) {
  return {
    watch: true,
    entry: path.resolve(__dirname, 'entry.js'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
    },
    plugins: [
      new WebpackNodeSecurityPlugin(options),
      new webpack.HotModuleReplacementPlugin(),
    ],
  };
};
