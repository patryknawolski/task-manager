angular
  .module('app.authentication')
  .factory('usersFactory', usersFactory)

/* @ngInject */
function usersFactory ($http, $timeout, $q) {
  var service = {
    getAll: getAll,
    getByEmail: getByEmail,
    getNewId: getNewId,
    create: create
  }

  return service

  function getAll () {
    var deferred = $q.defer()

    // fake delay
    $timeout(function () {
      return $http.get('http://localhost:3004/users')
        .then(function (response) {
          deferred.resolve(response.data)
        })
    }, 500)

    return deferred.promise
  }

  function getByEmail (email) {
    var deferred = $q.defer()

    // fake delay
    $timeout(function () {
      $http.get('http://localhost:3004/users?email=' + email)
        .then(function (response) {
          var user = response.data[0]
          user = user !== undefined ? user : false

          deferred.resolve(user)
        })
    }, 500)

    return deferred.promise
  }

  function getNewId () {
    return service.getAll()
      .then(function (users) {
        var lastId = users[users.length - 1].id

        return lastId + 1
      })
  }

  function create (newUser) {
    var deferred = $q.defer()

    service.getByEmail(newUser.email)
      .then(function (user) {
        var response = {}

        if (!user) {
          service.getNewId()
            .then(function (id) {
              newUser.id = id

              // fake delay
              $timeout(function () {
                $http.post('http://localhost:3004/users', newUser, {
                  headers: {
                    'Content-Type': 'application/json'
                  }
                })
                  .then(function () {
                    response.success = true
                    deferred.resolve(response)
                  })
              }, 500)
            })
        } else {
          response.success = false
          response.message = 'This email has been already registered.'
          deferred.resolve(response)
        }
      })

    return deferred.promise
  }
}
