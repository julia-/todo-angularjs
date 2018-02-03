function TodoController (TodoService) {
  const ctrl = this

  ctrl.newTodo = '';
  ctrl.list = []

  const getTodos = () => {
    TodoService
      .retrieve()
      .then(response => ctrl.list = response)
  }

  ctrl.addTodo = () => {
    if (!ctrl.newTodo) {
      return
    }
    TodoService
      .create({
        title: ctrl.newTodo,
        completed: false
      })
      .then(response => {
        ctrl.list.unshift(response)
        ctrl.newTodo = ''
      })
  }

  ctrl.updateTodo = (item, index) => {
    if (!item.title) {
      ctrl.removeTodo(item, index)
      return
    }

    TodoService
      .update(item)
  }

  ctrl.removeTodo = (item, index) => {
    TodoService
      .remove(item)
      .then(response => ctrl.list.splice(index, 1))
  }

  ctrl.toggleState = (item) => {
    TodoService
      .update(item)
      .then(response => {}, () => item.completed = !item.completed)
  }
  ctrl.getUncompletedTodos = () => {
    return ctrl.list.filter(item => !item.completed)
  }
  getTodos()
}

angular
  .module('app')
  .controller('TodoController', TodoController)