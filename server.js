import open from 'open';
import path from 'path';
import express from 'express';
import webpack from 'webpack';

import config from './webpack.config.dev';

require('dotenv').config({path: './.env'});

const APP      = express(),
      COMPILER = webpack(config)

APP.use(require('webpack-dev-middleware')(COMPILER, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

APP.use(require('webpack-hot-middleware')(COMPILER));

APP.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, './src/index.html'));
});

APP.listen(process.env.PORT, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`${process.env.HOSTNAME}:${process.env.PORT}`);
  }
});