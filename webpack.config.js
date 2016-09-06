module.exports = {
  entry: './public/js/app.js',
  output: {
    path: './public/js/bin',
    filename: 'app.bundle.js',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }],
  },
};
