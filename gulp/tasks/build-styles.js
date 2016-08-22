var config = require('../config')
var gulp = require('gulp')
var cleanCss = require('gulp-clean-css')

// Minifies styles
gulp.task('build-styles', function () {
  gulp.src(config.styles.build + '/**/*.css')
    .pipe(cleanCss())
    .pipe(gulp.dest(config.styles.build))
})
