var config = require('../config')
var gulp = require('gulp')

// Compiles, prefixes and copies styles
gulp.task('watch', function () {
  gulp.watch(config.styles.src, ['styles'])
  gulp.watch(config.scripts.src, ['eslint'])
})
