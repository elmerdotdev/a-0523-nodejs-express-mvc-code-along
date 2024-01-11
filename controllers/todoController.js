const { Todo } = require('../models/todoModel')

function getAllTodos() {
  return Todo.getAllTodos()
}

function getTodoById(id) {
  // Add logic here
  return Todo.getTodoById(id)
}

function createTodo(task, completed) {
  return Todo.createTodo(task, completed)
}

function updateTodo(id, task, completed) {
  return Todo.updateTodo(id, task, completed)
}

function deleteTodo(id) {
  return Todo.deleteTodo(id)
}

module.exports = {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo
}