var config = require('../config')
var gulp = require('gulp')

gulp.task('build-views', function () {
  return gulp.src(config.views.src)
    .pipe(gulp.dest(config.views.build))
})
