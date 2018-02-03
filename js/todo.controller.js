function TodoController () {
  this.newTodo = '';
  this.list = [
    {
      title: 'First todo',
      completed: true
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
  this.addTodo = () => {
    this.list.unshift({
      title: this.newTodo,
      completed: false
    })
    this.newTodo = ''
  }
  this.removeTodo = (item, index) => {
    this.list.splice(index, 1)
  }
}

angular
  .module('app')
  .controller('TodoController', TodoController)