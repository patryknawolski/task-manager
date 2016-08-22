var config = require('../config')
var gulp = require('gulp')
var clean = require('gulp-clean')

gulp.task('build-clean', function () {
  return gulp.src(config.buildDir)
    .pipe(clean())
})
