// Config and utils
global.polymer = require('../../polymer.json');

// This should be the default `build` directory when compiling
// using the polymer-CLI, so we define it here to keep the config file simpler.
global.buildDirectory = 'build';

global.isDevBuild = true;

global.config = global.polymer.config;
global.util = require('gulp-util');

// Gulp and other npm packages
global.gulp = require('gulp');
global.fontYellowBold = util.colors.yellow.bold;
global.fontCyanBold = util.colors.cyan.bold;
global.fontBlueBold = util.colors.blue.bold;
global.log = util.log;
global.runSequence = require('run-sequence');
global.del = require('del');
global.modified = require('gulp-modified');
global.autoprefixer = require('gulp-autoprefixer');
global.sass = require('gulp-sass');
global.scssLint = require('gulp-scss-lint');
global.rename = require('gulp-rename');
global.tap = require('gulp-tap');
global.path = require('path');
global.browserSync = require('browser-sync');
global.imagemin = require('gulp-imagemin');
global.webp = require('gulp-webp');
global.exec = require('child_process').exec;
global.cssnano = require('gulp-cssnano');
global.svgSprite = require('gulp-svg-sprite');
global.replace = require('gulp-replace');
global.gulpif = require('gulp-if');

