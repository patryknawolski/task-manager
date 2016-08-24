angular
  .module('app.layout')
  .controller('NavbarController', NavbarController)

function NavbarController ($location, $rootScope, authenticationFactory) {
  var vm = this
  vm.currentUser = $rootScope.globals.currentUser
  vm.isCollapsed = true
  vm.logout = logout

  $rootScope.$watch('globals.currentUser', function (newValue) {
    vm.currentUser = newValue
  })

  function logout () {
    authenticationFactory.logout()
      .then(logoutCallback)

    function logoutCallback (response) {
      if (response.success) {
        authenticationFactory.clearCredentials()

        $location.path('/')
      }
    }
  }
}
