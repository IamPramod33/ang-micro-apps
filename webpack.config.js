const AotPlugin = require('@ngtools/webpack').AngularCompilerPlugin;
// TypeScript-Kompilierung + AOT

const PurifyPlugin = require('@angular-devkit/build-optimizer').PurifyPlugin;
// Build Optimizer

const path = require('path');
const webpack = require('webpack');

const projectA = {
  entry: './projects/project-a/src/main.ts',
  resolve: {
    mainFields: ['browser', 'module', 'main']
  },
  module: {
    rules: [
      { test: /\.ts$/, loaders: ['@ngtools/webpack'] },
      { test: /\.html$/, loader: 'html-loader', options: { minimize: true } },
      /*{
        test: /\.css$/,
        "use": [
          "style-loader",
          {
            "loader": "css-loader",
            "options": {
              "sourceMap": false,
              "import": false
            }
          }
        ]
      },*/

      {
        test: /\.js$/,
        loader: '@angular-devkit/build-optimizer/webpack-loader',
        options: {
          sourceMap: false
        }
      }

    ]
  },
  plugins: [

    new AotPlugin({
      skipCodeGeneration: false,
      tsConfigPath: './projects/project-a/tsconfig.app.json',
      hostReplacementPaths: {
        "./src/environments/environment.ts": "./src/environments/environment.prod.ts"
      },
      entryModule: path.resolve(__dirname, './projects/project-a/src/app/app.module#AppModule')
    }),

    new PurifyPlugin()

  ],
  output: {
    path: __dirname + '/dist/ang-micro-app/project-a',
    filename: 'main.js'
  },
  mode: 'production'
};
const projectB = {
  entry: './projects/project-b/src/main.ts',
  resolve: {
    mainFields: ['browser', 'module', 'main']
  },
  module: {
    rules: [
      { test: /\.ts$/, loaders: ['@ngtools/webpack'] },
      { test: /\.html$/, loader: 'html-loader', options: { minimize: true } },
      /*{
        test: /\.css$/,
        "use": [
          "style-loader",
          {
            "loader": "css-loader",
            "options": {
              "sourceMap": false,
              "import": false
            }
          }
        ]
      },*/

      {
        test: /\.js$/,
        loader: '@angular-devkit/build-optimizer/webpack-loader',
        options: {
          sourceMap: false
        }
      }

    ]
  },
  plugins: [

    new AotPlugin({
      skipCodeGeneration: false,
      tsConfigPath: './projects/project-b/tsconfig.app.json',
      hostReplacementPaths: {
        "./src/environments/environment.ts": "./src/environments/environment.prod.ts"
      },
      entryModule: path.resolve(__dirname, './projects/project-b/src/app/app.module#AppModule')
    }),

    new PurifyPlugin()

  ],
  output: {
    path: __dirname + '/dist/ang-micro-app/project-b',
    filename: 'main.js'
  },
  mode: 'production'
};
module.exports = [projectA, projectB];
