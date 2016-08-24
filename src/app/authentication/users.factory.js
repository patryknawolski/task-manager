angular
  .module('app.authentication')
  .factory('usersFactory', usersFactory)

/* @ngInject */
function usersFactory ($http) {
  var service = {
    getByEmail: getByEmail
  }

  return service

  function getByEmail (email) {
    return $http.get('http://localhost:3004/users?email=' + email)
      .then(function (response) {
        var user = response.data[0]
        user = user !== undefined ? user : false

        return user
      })
  }
}
