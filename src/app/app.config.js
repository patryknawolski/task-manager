angular
  .module('app')
  .config(config)

/* @ngInject */
function config ($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'HomeController',
      controllerAs: 'vm',
      templateUrl: 'app/home/home.html'
    })
    .when('/dashboard', {
      controller: 'DashboardController',
      controllerAs: 'vm',
      templateUrl: 'app/dashboard/dashboard.html'
    })
    .when('/login', {
      controller: 'LoginController',
      controllerAs: 'vm',
      templateUrl: 'app/authentication/login.html'
    })
    .when('/register', {
      controller: 'RegisterController',
      controllerAs: 'vm',
      templateUrl: 'app/authentication/register.html'
    })
    .otherwise({ redirectTo: '/' })
}
