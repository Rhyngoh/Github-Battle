var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
  	loaders: [
  	  { test: /\.css$/, 
  	  	loader: [ 'style-loader', 'css-loader' ]
  	  },
  	  { 
  		test: /\.jsx?$/, 
  		include: /app/, 
  		loader: "babel-loader", 
  		exclude: /node_modules/, 
  		query: { 
  		  presets: ["react", "es2015", "es2016"]
  		}
  	  }
  	]
  },
  devtool: "eval-source-map"
};