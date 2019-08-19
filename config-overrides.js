const { override } = require('customize-cra');
const cspHtmlWebpackPlugin = require('csp-html-webpack-plugin');

const cspConfigPolicy = {
  'default-src': "'self'",
  'media-src': '*',
  'img-src': "'self' data:",
  'object-src': "'none'",
  'script-src': "'self'",
  'style-src': ["'self'"],
};

function modifyConfiguration(config) {
  if (process.env.NODE_ENV === 'production') {
    config.plugins.push(new cspHtmlWebpackPlugin(cspConfigPolicy));
  }

  config.optimization.minimizer.pop();

  return config;
}

module.exports = {
  webpack: override(modifyConfiguration),
};
