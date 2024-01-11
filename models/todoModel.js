class Todo {
  constructor(id, task, completed) {
    this.id = id,
    this.task = task,
    this.completed = completed
  }

  // Get all todos
  static getAllTodos() {
    return todos
  }

  // Get todo by id
  static getTodoById(id) {
    return todos.find(todo => todo.id === id)
  }

  // Create a todo
  static createTodo(task, completed) {
    const todoId = todos.length + 1
    const todo = new Todo(todoId, task, completed)
    todos.push(todo)
    return todo
  }

  // Update a todo
  static updateTodo(id, task, completed) {
    const todo = todos.find(item => item.id === id)
    if (todo) {
      todo.task = task
      todo.completed = completed
    }
    return todo
  }

  // Delete a todo
  static deleteTodo(id) {
    const index = todos.findIndex(todo => todo.id === id)
    if (index !== -1) {
      todos.splice(index, 1)
      return true
    }
    return false
  }
}

// In memory db
const todos = []

module.exports = {
  Todo,
  todos
}