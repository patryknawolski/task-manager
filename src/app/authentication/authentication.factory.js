angular
  .module('app.authentication')
  .factory('authenticationFactory', authenticationFactory)

/* @ngInject */
function authenticationFactory ($cookieStore, $http, $rootScope, $timeout, $q) {
  var service = {
    login: login,
    logout: logout,
    setCredentials: setCredentials,
    clearCredentials: clearCredentials
  }

  return service

  function login (email, password) {
    var defered = $q.defer()

    $timeout(function () {
      var response = {
        success: email === 'patryknawolski@gmail.com' && password === 'password'
      }

      if (!response.success) {
        response.message = 'Username or password is incorrect.'
      }

      defered.resolve(response)
    }, 1000)

    return defered.promise
  }

  function logout () {
    var defered = $q.defer()

    $timeout(function () {
      var response = {
        success: true,
        message: 'You\'ve been logged out successfully'
      }

      defered.resolve(response)
    }, 1000)

    return defered.promise
  }

  function setCredentials (email) {
    $rootScope.globals = {
      currentUser: {
        email: email
      }
    }

    $cookieStore.put('globals', $rootScope.globals)
  }

  function clearCredentials () {
    $rootScope.globals = {}

    $cookieStore.remove('globals')
  }
}
