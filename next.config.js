const { parsed: localEnv } = require('dotenv').config()
const webpack = require('webpack')

const NAME = process.env.NAME;
const JOB = process.env.JOB;
const CURRENCY = process.env.CURRENCY;

const nextConfig = {
  webpack: (config) => {
		config.plugins.push(new webpack.EnvironmentPlugin(localEnv))
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: "empty",
    };
    return config;
  },
  env: {
    NAME,
    JOB,
    CURRENCY,
  },
};

module.exports = nextConfig;
