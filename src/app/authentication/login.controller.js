angular
  .module('app.authentication')
  .controller('LoginController', LoginController)

function LoginController ($location, authenticationFactory) {
  var vm = this
  vm.login = login
  vm.user = {
    email: '',
    password: ''
  }

  function login () {
    authenticationFactory.login(vm.user.email, vm.user.password)
      .then(loginCallback)

    function loginCallback (response) {
      if (response.success) {
        authenticationFactory.setCredentials(vm.user.email, vm.user.password)
          .then(function () {
            $location.path('/dashboard')
          })
      } else if (response.message) {
        vm.error = response.message
      }
    }
  }
}
