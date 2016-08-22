var config = require('../config')
var gulp = require('gulp')
var imagemin = require('gulp-imagemin')

gulp.task('build-images', function () {
  return gulp.src(config.images.src)
    .pipe(imagemin())
    .pipe(gulp.dest(config.images.build))
})
