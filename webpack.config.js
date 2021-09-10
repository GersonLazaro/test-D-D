const webpack = require('webpack');
const WebpackCopyPlugin = require('webpack-copy-plugin');
const WatchIgnorePlugin = webpack.WatchIgnorePlugin;

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader' // creates style nodes from JS strings
        }, {
          loader: 'css-loader' // translates CSS into CommonJS
        }, {
          loader: 'sass-loader' // compiles Sass to CSS
        }]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new WebpackCopyPlugin({
      dirs: [
        { from: __dirname + '/src/assets', to: __dirname + '/dist/assets' }
      ],
      options: {}
    }),
    new WatchIgnorePlugin([
      __dirname + '/dist/assets'
    ])
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  }
};
