angular
  .module('app.layout')
  .controller('NavbarController', NavbarController)

function NavbarController ($location, authenticationFactory) {
  var vm = this
  vm.isCollapsed = true
  vm.logout = logout

  function logout () {
    authenticationFactory.logout()
      .then(logoutCallback)

    function logoutCallback (response) {
      if (response.success) {
        authenticationFactory.clearCredentials()

        $location.path('/login')
      }
    }
  }
}
