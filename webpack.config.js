import autoprefixer from 'autoprefixer-core';
import merge from 'lodash/object/merge';
import minimist from 'minimist';
import path from 'path';
import webpack, { DefinePlugin, BannerPlugin } from 'webpack';

const argv = minimist(process.argv.slice(2));
const DEBUG = !argv.release;
const GLOBALS = {
  'process.env.NODE_ENV': DEBUG
    ? '"development"'
    : '"production"',
  __DEV__: DEBUG,
};

const AUTOPREFIXER_BROWSERS = [
  'Android 2.3',
  'Android >= 4',
  'Chrome >= 20',
  'Firefox >= 24',
  'Explorer >= 8',
  'iOS >= 6',
  'Opera >= 12',
  'Safari >= 6',
];

const CSS_LOADER = DEBUG ? 'css-loader' : 'css-loader?minimize';
const STYLE_LOADER = 'style-loader/useable';

// Common configuration chunk to be used for both
// client-side (app.js) and server-side (server.js) bundles
// ---------------------------------------------------------------------------
const config = {
  cache: DEBUG,
  debug: DEBUG,

  stats: {
    colors: true,
    reasons: DEBUG,
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
  ],

  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.scss'],
  },

  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: `${STYLE_LOADER}!${CSS_LOADER}!postcss-loader`,
      },
      {
        test: /\.gif/,
        loader: 'url-loader?limit=5000&mimetype=image/gif&name=img/img-[hash:6].[ext]',
      },
      {
        test: /\.jpg/,
        loader: 'url-loader?limit=5000&mimetype=image/jpg&name=img/img-[hash:6].[ext]',
      },
      {
        test: /\.png/,
        loader: 'url-loader?limit=5000&mimetype=image/png&name=img/img-[hash:6].[ext]',
      },
      {
        test: /\.svg/,
        loader: 'url-loader?limit=5000&mimetype=image/svg+xml&name=img/img-[hash:6].[ext]',
      },
    ],
  },

  postcss: [autoprefixer(AUTOPREFIXER_BROWSERS)],
};

// Configuration for the client-side bundle (app.js)
// ---------------------------------------------------------------------------
const appConfig = merge({}, config, {
  entry: './src/app.js',
  output: {
    path: './build/public',
    filename: 'app.js',
  },
  target: 'web',
  devtool: DEBUG ? 'source-map' : false,
  plugins: config.plugins.concat(
    [
      new DefinePlugin(
        merge(GLOBALS, { __SERVER__: false })
      ),
    ]
    .concat(DEBUG
      ? []
      : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.AggressiveMergingPlugin(),
      ]
    )
  ),
  module: {
    loaders: config.module.loaders.concat(
      [
        {
          test: /\.js$/,
          include: [
            path.join(__dirname, 'src'),
          ],
          loader: 'ng-annotate-loader!babel-loader',
        },
      ]
    ),
  },
});

// Configuration for the server-side bundle (server.js)
// ---------------------------------------------------------------------------
const serverConfig = merge({}, config, {
  entry: './src/server.js',
  output: {
    path: './build',
    filename: 'server.js',
    libraryTarget: 'commonjs2',
  },
  target: 'node',
  externals: [
    function externals(context, request, cb) {
      const isExternal = request.match(/^[a-z][a-z\/\.\-0-9]*$/i);

      cb(null, Boolean(isExternal));
    },
  ],
  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false,
  },
  devtool: DEBUG
    ? 'source-map'
    : 'cheap-module-source-map',
  plugins: config.plugins.concat(
    new DefinePlugin(merge(GLOBALS, { __SERVER__: true })),
    new BannerPlugin('require("source-map-support").install();', {
      raw: true,
      entryOnly: false,
    })
  ),
  module: {
    loaders: config.module.loaders.map(function loaders(loader) {
      return merge(loader, {
        loader: loader.loader = loader.loader.replace(STYLE_LOADER + '!', ''),
      });
    }).concat(
      [
        {
          test: /\.js$/,
          include: [
            path.join(__dirname, 'src'),
          ],
          loader: 'babel-loader',
        },
      ]
    ),
  },
});

// Configuration for the client-side styles (app.scss)
// ---------------------------------------------------------------------------
const styleConfig = merge({}, config, {
  entry: './src/app.scss',
  output: {
    path: './build/public',
    filename: 'app.css',
  },
  target: 'web',
  devtool: DEBUG ? 'source-map' : false,
  plugins: config.plugins.concat(
    [
      new DefinePlugin(
        merge(GLOBALS, { __SERVER__: false })
      ),
    ]
  ),
  module: {
    loaders: config.module.loaders.concat(
      [
        {
          test: /\.scss$/,
          loader: `${STYLE_LOADER}!${CSS_LOADER}!postcss-loader!sass-loader`,
        },
      ]
    ),
  },
});

export default [appConfig, serverConfig, styleConfig];
