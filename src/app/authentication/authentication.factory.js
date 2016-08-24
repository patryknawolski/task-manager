angular
  .module('app.authentication')
  .factory('authenticationFactory', authenticationFactory)

/* @ngInject */
function authenticationFactory ($cookieStore, $http, $rootScope, $timeout, $q, base64Factory, usersFactory) {
  var service = {
    login: login,
    logout: logout,
    setCredentials: setCredentials,
    clearCredentials: clearCredentials
  }

  return service

  function login (email, password) {
    return usersFactory.getByEmail(email)
      .then(function (user) {
        var response = {}

        if (user.password === password && user.password !== undefined) {
          response.success = true
        } else {
          response.success = false
          response.message = 'Password for this account is incorrect.'
        }

        return response
      })
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
