angular
  .module('app.authentication')
  .factory('authenticationFactory', authenticationFactory)

/* @ngInject */
function authenticationFactory ($cookieStore, $http, $rootScope, $timeout, $q, base64Factory, usersFactory) {
  var service = {
    clearCredentials: clearCredentials,
    login: login,
    setCredentials: setCredentials
  }

  return service

  function clearCredentials () {
    $rootScope.globals = {}

    $http.defaults.headers.common.Authorization = 'Basic '
    $cookieStore.remove('globals')
  }

  function login (email, password) {
    return usersFactory.getByEmail(email)
      .then(function (user) {
        var response = {}

        if (user !== null && user.password === password) {
          response.success = true
        } else {
          response.success = false
          response.message = 'Password for this account is incorrect.'
        }

        return response
      })
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
}
