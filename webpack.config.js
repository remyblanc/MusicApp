const path = require('path');
const ExtractTextPlugin = require ('extract-text-webpack-plugin');

module.exports = {
  entry: './src/App.jsx',
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
        test: /\.css$/,
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
    ]
  },
  plugins: [
    new ExtractTextPlugin( "bundle.css" )
  ],
  devtool: 'cheap-eval-source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.json', '*']
  }
};