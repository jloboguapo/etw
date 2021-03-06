const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: ['./client/js/index.js'],
  devtool: 'inline-source-map',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  devServer: {
    host: '0.0.0.0',
    port: '8088',
    historyApiFallback: true,
    compress: true,
    hot: true,
    contentBase: path.join(__dirname, 'dist'),
    publicPath: '/',
    open: true
  },
  resolve: {
    modules: ['client/js', 'node_modules']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [path.join(__dirname, 'client/js/')],
        exclude: /node_modules/,
        options: { cacheDirectory: true }
      },
      {
        test: /\.s?css$/,
        use: [
          'style-loader?sourceMap',
          'css-loader?sourceMap',
          'postcss-loader?sourceMap',
          'sass-loader?outputStyle=compressed&sourceMap'
        ],
        exclude: '/main.css'
      },
      {
        test: /\.(svg|png|jpe?g)$/,
        loader: 'url-loader'
      }
    ]
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development'
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [autoprefixer()]
      }
    })
  ],
  watch: true
};
