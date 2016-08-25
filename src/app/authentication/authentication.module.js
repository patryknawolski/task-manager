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
    var isPageRestricted
    var loggedIn = $rootScope.globals.currentUser

    var path = $location.path()

    if (!loggedIn) {
      isPageRestricted = ['/', '/login', '/register'].indexOf(path) === -1

      if (isPageRestricted) {
        $location.path('/login')
      }
    } else {
      isPageRestricted = ['/', '/login', '/register'].indexOf(path) !== -1

      if (isPageRestricted) {
        $location.path('/dashboard')
      }
    }
  })
}
