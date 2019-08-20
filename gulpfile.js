'use strict';

var { series, src, dest } = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var cssPurge = require('gulp-css-purge');
var sourcemap = require('gulp-sourcemaps');

sass.compiler = require('sass');

function compileScss() {
  return src('css/scss/main.scss')
    .pipe(sourcemap.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(cssPurge())
    .pipe(rename("styles.min.css"))
    .pipe(sourcemap.write())
    .pipe(dest('css/'));
}

function compileJs() {
  return src('js/main.js')
    .pipe(sourcemap.init())
    .pipe(uglify())
    .pipe(rename('main.min.js'))
    .pipe(sourcemap.write())
    .pipe(dest('js/'));
}

exports.default = series(compileScss, compileJs);
