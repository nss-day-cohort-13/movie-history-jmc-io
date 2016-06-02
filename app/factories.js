angular.module('app')
	.factory('todoFactory', ($http, API_URL) => {
		// cached todo
		let todos = null

		return {
			getTodos () {
				return $http
					.get(`${API_URL}.json`)
					.then(res => res.data)
					.then(t => todos = t)
			},

			toggleTodo (id) {
				return $http
					.patch(`${API_URL}/${id}.json`,
						{ completed: todos[id].completed }
					)
			}
		}
	})
