let mix = require('laravel-mix');

require('laravel-mix-tailwind');
require('laravel-mix-polyfill');
require('laravel-mix-purgecss');

mix.setPublicPath('public')
    .js('resources/js/main.js', 'public/js')
    .js('resources/js/glide.js', 'public/js')
    .sass('resources/sass/partials/header.scss', 'public/css')
    .sass('resources/sass/homepage.scss', 'public/css')
    .polyfill({
        enabled: true,
        useBuiltIns: 'usage',
        targets: { firefox: '50', ie: 9 },
    })
    .version()
    .tailwind();
    // .purgeCss({
    //     enabled: true,
    //     folders: ['resources'],
    //     extensions: ['html', 'js', 'php', 'vue', 'twig'],
    // });
