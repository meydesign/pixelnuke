import path from 'path';

module.exports = function webpackServer(options) {
  const BUILD = options.build || false;

  return {
    entry: path.join(__dirname, '/src/server.js'),

    output: {
      path: path.join(__dirname, '/build'),
      filename: BUILD ? 'server.[hash].js' : 'server.bundle.js',
      chunkFilename: BUILD ? 'server.[hash].js' : 'server.bundle.js',
      sourceMapFilename: BUILD ? 'server.[hash].js.map' : 'server.bundle.js.map',
      publicPath: '/',
      libraryTarget: 'commonjs2',
    },

    module: {
      loaders: [
        {
          test: /\.js?$/,
          exclude: [
            /node_modules/,
            /\.test\.js$/,
          ],
          loader: 'babel',
        },
      ],
      preLoaders: [
        {
          test: /\.js$/,
          exclude: [
            /node_modules/,
            /\.test\.js$/,
          ],
          loader: 'isparta-instrumenter',
        },
      ],
    },

    resolve: {
      modulesDirectories: ['node_modules'],
      extensions: ['', '.js'],
    },

    externals: [
      function externals(context, request, cb) {
        const isExternal = request.match(/^[a-z][a-z\/\.\-0-9]*$/i);

        cb(null, Boolean(isExternal));
      },
    ],

    target: 'node',

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

    node: {
      console: false,
      global: false,
      process: false,
      Buffer: false,
      __filename: false,
      __dirname: false,
    },

    plugins: [],
  };
};
