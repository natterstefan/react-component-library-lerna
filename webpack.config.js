const babelConfig = require('./babel.config')

module.exports = {
  resolve: {
    extensions: ['.js'],
    // mainFields: ['main', 'module'], // https://github.com/webpack/webpack/issues/5756#issuecomment-405468106
  },
  devtool: 'source-map',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: babelConfig,
          },
        ],
      },
    ],
  },
}
