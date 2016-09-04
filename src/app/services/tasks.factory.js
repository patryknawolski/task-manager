angular
  .module('app.services')
  .factory('tasksFactory', tasksFactory)

/* @ngInject */
function tasksFactory ($http, $timeout, $q) {
  var service = {
    getByUserId: getByUserId,
    getStarredByUserId: getStarredByUserId
  }

  return service

  function getByUserId (id, limitTo) {
    var deferred = $q.defer()

    $timeout(function () {
      var url = 'http://localhost:3004/users/' + id + '/tasks'

      if (typeof limitTo !== 'undefined') {
        url += '?_limit=' + limitTo
      }

      return $http.get(url)
        .then(function (response) {
          deferred.resolve(response.data)
        })
    }, 500)

    return deferred.promise
  }

  function getStarredByUserId (id, limitTo) {
    var deferred = $q.defer()

    $timeout(function () {
      var url = 'http://localhost:3004/users/' + id + '/tasks?starred=true'

      if (typeof limitTo !== 'undefined') {
        url += '?_limit=' + limitTo
      }

      return $http.get(url)
        .then(function (response) {
          deferred.resolve(response.data)
        })
    }, 500)

    return deferred.promise
  }
}
