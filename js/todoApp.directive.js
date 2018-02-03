function todoApp() {
  return {
    scope: {},
    restrict: 'E',
    controller: 'TodoController as todo',
    templateUrl: '../templates/todoApp.html'
  }
}

angular
  .module('app')
  .directive('todoApp', todoApp)