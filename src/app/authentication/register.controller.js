angular
  .module('app.authentication')
  .controller('RegisterController', RegisterController)

function RegisterController ($location, authenticationFactory) {
  var vm = this
  vm.register = register
  vm.user = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  function register () {
    alert('registered')
  }
}
