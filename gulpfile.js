const { src, dest, watch, task, lastRun } = require('gulp');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass')(require('sass'));

function defaultJS() {
  return src('./src/assets/**/*.js', { since: lastRun(defaultJS) })
    .pipe(uglify())
    .pipe(dest('./src/dist/', { sourcemaps: true }));
}

function defaultCSS() {
    return src('./src/assets/**/*.scss', { since: lastRun(defaultCSS) })
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('./src/dist/'));
}

exports.default = function() {
    task(['defaultJS', 'defaultCSS']);
    watch('./src/assets/**/*.js', defaultJS);
    watch('./src/assets/**/*.scss', defaultCSS);
};