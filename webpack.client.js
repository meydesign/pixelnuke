import path from 'path';

import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

module.exports = function webpackClient(options) {
  const BUILD = options.build || false;

  return {
    entry: [
      'font-awesome-webpack!' + path.join(__dirname, '/src/config/font-awesome.config.js'),
      'bootstrap-webpack!' + path.join(__dirname, '/src/config/bootstrap.config.js'),
      path.join(__dirname, '/src/app.scss'),
      path.join(__dirname, '/src/app.js'),
    ],

    output: {
      path: path.join(__dirname, '/build/public'),
      filename: BUILD ? '[name].[hash].js' : '[name].bundle.js',
      chunkFilename: BUILD ? '[name].[hash].js' : '[name].bundle.js',
      sourceMapFilename: BUILD ? '[name].[hash].js.map' : '[name].bundle.js.map',
      publicPath: '/',
      libraryTaret: 'umd',
    },

    module: {
      loaders: [
        {
          test: /\.js?$/,
          exclude: [
            /node_modules/,
            /\.test\.js$/,
            /bootstrap.config.js/,
          ],
          loader: 'babel',
        },
        {
          test: /\.scss?$/,
          exclude: /node_modules/,
          loader: ExtractTextPlugin.extract('style-loader', 'css?sourceMap!sass?sourceMap'),
        },
        {
          test: /\.(png|jpg|gif|svg)$/,
          loader: 'file',
        },
        {
          test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: 'url-loader?limit=10000&minetype=application/font-woff',
        },
        {
          test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: 'file',
        },
        {
          test: /\.jade$/,
          loader: 'jade',
        },
        {
          test: /\.html$/,
          loader: 'html',
        },
      ],
      preLoaders: [
        {
          test: /\.js$/,
          exclude: [
            /node_modules/,
            /\.test\.js$/,
            /bootstrap.config.js/,
          ],
          loader: 'eslint',
        },
      ],
    },

    resolve: {
      modulesDirectories: ['node_modules'],
      extensions: ['', '.js', '.scss'],
    },

    externals: [],

    target: 'web',

    devtool: 'source-map',

    devServer: {
      contentBase: './build',
      stats: {
        modules: false,
        cached: false,
        colors: true,
        chunk: false,
      },
    },

    plugins: [
      new ExtractTextPlugin('[name].css'),
      new HtmlWebpackPlugin({
        title: 'pixelnuke',
        filename: 'index.html',
        template: path.join(__dirname, '/src/templates/index.html'),
        favicon: path.join(__dirname, '/src/public/favicon.ico'),
        inject: 'body',
        hash: true,
      }),
    ],

    eslint: {
      configFile: '.eslintrc',
    },
  };
};
