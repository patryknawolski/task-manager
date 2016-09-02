angular
  .module('app.dashboard')
  .controller('DashboardController', DashboardController)

function DashboardController ($rootScope, tasksFactory) {
  var vm = this
  vm.recentTasks
  vm.starredTasks

  activate()

  function activate () {
    tasksFactory.getByUserId($rootScope.globals.currentUser.id, 5)
      .then(function (data) {
        vm.recentTasks = data
      })

    tasksFactory.getStarredByUserId($rootScope.globals.currentUser.id, 5)
      .then(function (data) {
        vm.starredTasks = data
      })
  }
}
