;(function () {
  angular
    .module('app', [
      // angular
      'ngCookies',
      'ngRoute',

      // vendor
      'ui.bootstrap',

      // shared
      'app.services',

      // layout
      'app.layout',

      // feature areas
      'app.authentication',
      'app.dashboard',
      'app.home',
      'app.tasks'
    ])
})()
