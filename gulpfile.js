'use strict';

var { series, src, dest } = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var cssPurge = require('gulp-css-purge');
var sourcemap = require('gulp-sourcemaps');
var htmlmin = require('gulp-htmlmin');
var htmlbeautify = require('gulp-html-beautify');

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

async function compileJs() {
  var jsFiles = ["main", "plugins"];
  jsFiles.forEach(file => {
    return src(`js/${file}.js`)
      .pipe(sourcemap.init())
      .pipe(uglify())
      .pipe(rename(`${file}.min.js`))
      .pipe(sourcemap.write())
      .pipe(dest('js/'));
  })
}

exports.default = series(compileScss, compileJs);
