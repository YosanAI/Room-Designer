const path = require('path');

module.exports = {
  entry: './src/roombuilder.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist/js'),
  },
};