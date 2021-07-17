const sass = require('gulp-sass')(require('node-sass'))

const { src, dest } = require('gulp')
const concat = require('gulp-concat')

function generateCSS(cb) {
  src('./assets/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('main.css'))
    .pipe(dest('static/css'))
  cb()
}

function generateMainJS(cb) {
  src('assets/js/main/*/*.js')
    .pipe(concat('main.js'))
    .pipe(dest('static/js'))
  cb()
}

exports.css = generateCSS
exports.js = generateMainJS
