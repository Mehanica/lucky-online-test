const path = require(`path`);
const CircularDependencyPlugin = require('circular-dependency-plugin')
const DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin");

module.exports = {
  context: path.resolve(__dirname, `source`),
  mode: `production`, // Режим сборки
  entry: {
    main: `./js/main.js`,
    vendor: `./js/vendor.js`,
  }, // Точка входа приложения
  devtool: 'sourcemap',
  output: {// Настройка выходного файла
    filename: `[name].min.js`,
    path: path.join(__dirname, `build/js`),
  },
  optimization: {
    minimize: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: {
          loader: `babel-loader`,
          options: {
            presets: [`@babel/preset-env`],
          },
        },
      },
    ],
  },
  plugins: [
    new DuplicatePackageCheckerPlugin(),
    new CircularDependencyPlugin(),
  ],
};
