const path = require('path');
const ExtractTextPlugin = require ('extract-text-webpack-plugin');

module.exports = {
  entry: ["babel-polyfill", './src/Main.jsx'],
  output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader!sass-loader",
        })
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|otf|ttf)$/i,
        loader: "file-loader?name=fonts/[name]-[hash].[ext]"
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin( "bundle.css" )
  ],
  devtool: 'cheap-eval-source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.json', '*']
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
          secure: false
      },
      '/login': {
      target: 'http://localhost:5000',
        secure: false
      }
    }
  }
};