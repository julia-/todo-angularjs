function TodoService($http) {
  const api = '//jsonplaceholder.typicode.com/todos/'

  function create(todo) {
    return $http.post(api, todo).then(response => response.data)
  }

  function retrieve() {
    return $http.get(api).then(response => response.data.splice(0, 10))
  }

  function update(todo) {
    return $http.put(api + todo.id).then(response => response.data)
  }

  function remove(todo) {
    return $http.delete(api + todo.id).then(response => response.data)
  }

  return {
    create: create,
    retrieve: retrieve,
    update: update,
    remove: remove
  }
}

angular
  .module('app')
  .factory('TodoService', TodoService)
