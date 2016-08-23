angular
  .module('app')
  .config(config)

/* @ngInject */
function config ($routeProvider) {
  $routeProvider
    .when('/login', {
      controller: 'LoginController',
      controllerAs: 'vm',
      templateUrl: 'app/authentication/login.html'
    })
    .when('/', {
      controller: 'HomeController',
      controllerAs: 'vm',
      templateUrl: 'app/home/home.html'
    })
    .otherwise({ redirectTo: '/login' })
}
