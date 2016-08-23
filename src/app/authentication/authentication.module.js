;(function () {
  angular
    .module('app.authentication', [])
    .run(run)
})()

/* @ngInject */
function run ($cookieStore, $http, $location, $rootScope) {
  // keep user logged in after page refresh
  $rootScope.globals = $cookieStore.get('globals') || {}

  $rootScope.$on('$locationChangeStart', function () {
    if ($location.path() !== '/login' && !$rootScope.globals.currentUser) {
      $location.path('/login')
    }
  })
}
