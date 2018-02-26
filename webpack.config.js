const path = require('path');

module.exports = function (env) {
  var config = {
    entry: './src/index.js',
    output: {
      path: path.resolve('dist'),
      publicPath: 'dist',
      filename: 'index_bundle.js'
    },
    module: {
      loaders: [
        { test: /\.js$/, loader: 'babel-loader', include: path.resolve(__dirname, 'src'), exclude: /node_modules/ },
        { test: /\.scss$/, use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'sass-loader' }] }
      ]
    },
    devServer: {
      contentBase: __dirname,
      port: 9000
    }
  }

  return config;
}