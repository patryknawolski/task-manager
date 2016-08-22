var config = require('../config')
var gulp = require('gulp')
var eslint = require('gulp-eslint')

gulp.task('eslint', function () {
  return gulp.src([config.scripts.src, 'gulpfile.js', 'gulp/*/**.js'])
    .pipe(eslint())
    .pipe(eslint.format())
})
