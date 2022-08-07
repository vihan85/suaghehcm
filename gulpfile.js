const { src, dest, watch, task, lastRun } = require('gulp');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass')(require('sass'));
const minify = require('gulp-minify');

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

function buildJS() {
    return src('./src/assets/**/*.js', { since: lastRun(defaultJS) })
        .pipe(uglify())
        .pipe(minify())
        .pipe(dest('./src/dist/', { sourcemaps: true }));
}
function buildCSS() {
    return src('./src/assets/**/*.scss', { since: lastRun(defaultCSS) })
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(dest('./src/dist/'));
}

// Build to wordpress
exports.buildJS = buildJS;
exports.buildCSS = buildCSS;
// Build to Frontend
exports.defaultJS = defaultJS;
exports.defaultCSS = defaultCSS;

exports.default = function() {
    watch('./src/assets/**/*.js', defaultJS);
    watch('./src/assets/**/*.scss', defaultCSS);
};