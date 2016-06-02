'use strict';

app.controller("MovieDoing", ($scope, $http) => {




  todoFactory.getTodos().then(todos => t.todos = todos)

    t.toggleTodo = (id) => {
      // optimistic update
      t.todos[id].completed = !t.todos[id].completed

      todoFactory.toggleTodo(id)
        .catch(res => t.todos[id].completed = !t.todos[id].completed)
    }
})
