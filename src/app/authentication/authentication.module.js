;(function () {
  angular
    .module('app.authentication', [])
    .run(run)
})()

/* @ngInject */
function run ($cookieStore, $http, $location, $rootScope) {
  // keep user logged in after page refresh
  $rootScope.globals = $cookieStore.get('globals') || {}

  if ($rootScope.globals.currentUser) {
    $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata
  }

  $rootScope.$on('$locationChangeStart', function () {
    var path = $location.path()

    // redirect to login page if not logged in
    if (path !== '/' && path !== '/login' && !$rootScope.globals.currentUser) {
      $location.path('/login')
    }
  })
}
