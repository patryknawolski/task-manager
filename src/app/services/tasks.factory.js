angular
  .module('app.services')
  .factory('tasksFactory', tasksFactory)

/* @ngInject */
function tasksFactory ($http) {
  var service = {
    getByUserId: getByUserId,
    getStarredByUserId: getStarredByUserId
  }

  return service

  function getByUserId (id, limitTo) {
    var url = 'http://localhost:3004/users/' + id + '/tasks'

    if (typeof limitTo !== 'undefined') {
      url += '?_limit=' + limitTo
    }

    return $http.get(url)
      .then(function (response) {
        return response.data
      })
  }

  function getStarredByUserId (id, limitTo) {
    var url = 'http://localhost:3004/users/' + id + '/tasks?starred=true'

    if (typeof limitTo !== 'undefined') {
      url += '?_limit=' + limitTo
    }

    return $http.get(url)
      .then(function (response) {
        return response.data
      })
  }
}
