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

async function compileHtml() {
  var htmlFiles = ['index', '404'];
  htmlFiles.forEach(file => {
    return src(`${file}.html`)
      .pipe(sourcemap.init())
      .pipe(htmlmin({
        collapseWhitespace: true,
        decodeEntities: true,
        html5: true,
        processConditionalComments: true,
        removeAttributeQuotes: true,
        removeComments: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        sortAttributes: true,
        sortClassName: true,
        quoteCharacter: '"',
      }))
      .pipe(sourcemap.write())
      .pipe(dest('./'))
  })
}

async function beautifyHtml() {
  var htmlFiles = ['index', '404'];
  htmlFiles.forEach(file => {
    return src(`${file}.html`)
      .pipe(htmlbeautify({
        "indent_size": 2,
        "indent_char": " ",
        "eol": "\n",
        "indent_level": 0,
        "indent_with_tabs": false,
        "preserve_newlines": true,
        "max_preserve_newlines": 10,
        "minifyCSS": true,
        "space_before_conditional": true,
        "eval_code": false,
        "unescape_strings": false,
        "wrap_line_length": 0,
        "wrap_attributes": "auto",
        "wrap_attributes_indent_size": 2,
        "end_with_newline": true
      }))
      .pipe(dest('./'))
  })
}

exports.html = beautifyHtml;
exports.default = series(compileScss, compileJs, compileHtml);
