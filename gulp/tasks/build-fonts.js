var config = require('../config')
var gulp = require('gulp')

gulp.task('build-fonts', function () {
  return gulp.src(config.fonts.src)
    .pipe(gulp.dest(config.fonts.build))
})
