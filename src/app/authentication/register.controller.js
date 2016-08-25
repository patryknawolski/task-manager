angular
  .module('app.authentication')
  .controller('RegisterController', RegisterController)

function RegisterController ($location, authenticationFactory, usersFactory) {
  var vm = this
  vm.register = register
  vm.user = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }

  function register (user) {
    usersFactory.create(user)
      .then(createCallback)

    function createCallback (response) {
      if (response.success) {
        authenticationFactory.setCredentials(vm.user.email, vm.user.password)

        $location.path('/dashboard')
      } else if (response.message) {
        vm.error = response.message
      }
    }
  }
}
