const express = require('express');
const webpack = require('webpack');
const webpackCompiler = webpack(require('./webpack.config.js'));
const port = 3001;

const app = express();

app.use(require('webpack-dev-middleware')(webpackCompiler, {
  noInfo: true,
  publicPath: `http://localhost:${port}/dist`
}));

app.use(express.static('.'));

app.listen(port, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`Server is listening at http://localhost:${port}`);
});
