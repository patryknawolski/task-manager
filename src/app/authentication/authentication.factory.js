angular
  .module('app.authentication')
  .factory('authenticationFactory', authenticationFactory)

/* @ngInject */
function authenticationFactory ($cookieStore, $http, $rootScope, $timeout, $q, base64Factory) {
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
        success: true
      }

      defered.resolve(response)
    }, 1000)

    return defered.promise
  }

  function setCredentials (email, password) {
    var authdata = base64Factory.encode(email + ':' + password)

    $rootScope.globals = {
      currentUser: {
        email: email,
        authdata: authdata
      }
    }

    $http.defaults.headers.common['Authorization'] = 'Basic ' + authdata
    $cookieStore.put('globals', $rootScope.globals)
  }

  function clearCredentials () {
    $rootScope.globals = {}

    $http.defaults.headers.common.Authorization = 'Basic '
    $cookieStore.remove('globals')
  }
}
