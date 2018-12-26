var SpritesmithPlugin = require('webpack-spritesmith');
var path = require('path');


/**
 * Function that mutates original webpack config.
 * Supports asynchronous changes when promise is returned.
 *
 * @param {object} config - original webpack config.
 * @param {object} env - options passed to CLI.
 * @param {WebpackConfigHelpers} helpers - object with useful helpers when working with config.
 **/
export default function (config, env, helpers) {
  config.plugins.push(new SpritesmithPlugin({
    src: {
      cwd: path.resolve(__dirname, 'src/assets/'),
      glob: '!(icons)**/*.png'
    },
    target: {
        image: path.resolve(__dirname, 'src/spritesmith-generated/sprite.png'),
        css:  path.resolve(__dirname, 'src/spritesmith-generated/sprite.scss')
      },
      apiOptions: {
        cssImageRef: '/spritesmith-generated/sprite.png',
      }
    }));
  config.resolve.modules.push('spritesmith-generated');
}

// const makeSprite = (path) => new SpritesmithPlugin({
//   src: {
//     cwd: path.resolve(__dirname, 'images/spritesource', path),
//     glob: '*.png'
//   },
//   target: {
//     image: path.resolve(__dirname, 'images/sprites', path),
//     css: path.resolve(__dirname, 'images/sprites', path)
//   },
//   ...
// });
//
// //... then in webpack.config.js
//
// plugins: [
//   makeSprite('home'),
//   makeSprite('users')
// ]