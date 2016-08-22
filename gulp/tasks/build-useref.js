var config = require('../config')
var gulp = require('gulp')
var useref = require('gulp-useref')

gulp.task('build-useref', function () {
  return gulp.src(config.views.index)
    .pipe(useref())
    .pipe(gulp.dest(config.buildDir))
})
