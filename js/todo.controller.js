const TodoController = () => {
  this.list = [
    {
      title: 'First todo',
      completed: false
    },
    {
      title: 'Second todo',
      completed: false
    },
    {
      title: 'Third todo',
      completed: false
    }
  ]
}

angular
  .module('app')
  .controller('TodoController', TodoController)