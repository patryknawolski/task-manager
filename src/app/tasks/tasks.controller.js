angular
  .module('app.tasks')
  .controller('TasksController', TasksController)

function TasksController ($rootScope, tasksFactory) {
  var vm = this
  vm.tasks

  activate()

  function activate () {
    tasksFactory.getByUserId($rootScope.globals.currentUser.id)
      .then(function (data) {
        vm.tasks = data
      })
  }
}
