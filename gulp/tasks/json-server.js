var config = require('../config')
var gulp = require('gulp')
var jsonServer = require('json-server')
var server = jsonServer.create()
var router = jsonServer.router(config.database)
var middlewares = jsonServer.defaults()

gulp.task('json-server', function () {
  server.use(middlewares)

  server.use(router)
  server.listen(3004, function () {
    console.log('JSON Server is running on 3004 serving ' + config.database)
  })
})
