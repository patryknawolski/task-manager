var config = require('../config')
var gulp = require('gulp')
var ngAnnotate = require('gulp-ng-annotate')
var uglify = require('gulp-uglify')

// Minifies scripts
gulp.task('build-scripts', function () {
  gulp.src(config.scripts.build + '/**/*.js')
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(gulp.dest(config.scripts.build))
})
