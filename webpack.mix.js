// webpack.mix.js

let mix = require('laravel-mix');

mix.js('src/script.js', 'dist').setPublicPath('dist').sass('src/style.scss', 'dist');
