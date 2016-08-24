;(function () {
  angular
    .module('app', [
      // angular
      'ngCookies',
      'ngRoute',

      // vendor
      'ui.bootstrap',

      // layout
      'app.layout',

      // feature areas
      'app.authentication',
      'app.dashboard',
      'app.home'
    ])
})()
