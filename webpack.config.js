const path = require(`path`);

module.exports = {
  context: path.resolve(__dirname, `source`),
  mode: `development`, // Режим сборки
  entry: {
    main: `./js/main.js`
  }, // Точка входа приложения
  devtool: 'nosources',
  output: {// Настройка выходного файла
    filename: `[name].js`,
    path: path.join(__dirname, `build/js`),
  },
  optimization: {
    minimize: false
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
  }
};
