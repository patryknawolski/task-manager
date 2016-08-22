var config = require('../config')
var gulp = require('gulp')
var browserSync = require('browser-sync').create()

gulp.task('browserSync', function () {
  browserSync.init({
    server: {
      baseDir: config.sourceDir
    }
  })

  gulp.watch(config.views.index).on('change', browserSync.reload)

  gulp.watch(config.styles.tmp + '/**/*.css', function () {
    return gulp.src(config.styles.compiled)
      .pipe(browserSync.stream())
  })
})
