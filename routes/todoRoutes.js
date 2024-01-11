const express = require('express')
const router = express.Router()
const todoController = require('../controllers/todoController')

// Route to fetch all todos
router.get('/', (req, res) => {
  const todos = todoController.getAllTodos()
  res.render('todos', { todos, pageTitle: 'Todos List'})
  // res.json(todos)
})

// Route to fetch one todo
router.get('/:id', (req, res) => {
  const todoId = parseInt(req.params.id)
  const todo = todoController.getTodoById(todoId)
  if (!todo) {
    res.status(404).json({ error: 'No todo exist' })
  } else {
    res.status(200).json(todo)
  }
})

// Route to add a todo
router.post('/', (req, res) => {
  const { task, completed } = req.body // req.body is from POST request body
  const todo = todoController.createTodo(task, completed)
  res.status(201).json(todo)
})

// Route to update todo
router.put('/:id', (req, res) => {
  const todoId = parseInt(req.params.id)
  const { task, completed } = req.body
  const todo = todoController.updateTodo(todoId, task, completed)
  if (!todo) {
    res.status(404).json({ error: 'Todo does not exist' })
  } else {
    res.status(200).json(todo)
  }
})

// Route to delete todo
router.delete('/:id', (req, res) => {
  const todoId = parseInt(req.params.id)
  const result = todoController.deleteTodo(todoId)
  if (result) {
    res.status(200).send('Todo deleted!')
  } else {
    res.status(404).json({ error: 'Todo does not exist' })
  }
})

module.exports = router