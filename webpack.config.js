const path = require('path');

module.exports = {
  entry: './app.js',  // Entry file for the application
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),  // Output folder for bundled files
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',  // Babel loader to transpile JavaScript
          options: {
            presets: ['@babel/preset-env'],  // Use the env preset for JS transformation
          },
        },
      },
    ],
  },
  resolve: {
    alias: {
      // Example aliases can be defined here, if necessary
    },
  },
  mode: 'development', // Change to 'production' for production build
};
