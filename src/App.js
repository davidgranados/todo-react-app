import { useState } from 'react'

import { TodoCounter } from './todo-counter'
import { TodoSearch } from './todo-search'
import { TodoList } from './todo-list'
import { TodoItem } from './todo-item'
import { CreateTodoButton } from './create-todo-button'

// const defaultTodos = [
//   { text: 'tarea 1', completed: false },
//   { text: 'tarea 2', completed: false },
//   { text: 'tarea 3', completed: true },
// ]

function App() {
  console.log('🚀 ~ file: App.js ~ line 16', 'render app')

  const localStorageTodos = localStorage.getItem('TODOS_V1')

  let parsedTodos = []

  if (!localStorageTodos) {
    localStorage.setItem('TODOS_V1', JSON.stringify([]))
  } else {
    parsedTodos = JSON.parse(localStorageTodos)
  }

  const [todos, setTodos] = useState(parsedTodos)
  const [query, setQuery] = useState('')

  const completedTodos = todos.filter((todo) => todo.completed).length
  const totalTodos = todos.length

  let searchedTodos = []
  if (query.length < 1) {
    searchedTodos = todos
  } else {
    searchedTodos = todos.filter((todo) =>
      todo.text.toLocaleLowerCase().includes(query.toLocaleLowerCase())
    )
  }

  const saveTodos = (newTodos) => {
    localStorage.setItem('TODOS_V1', JSON.stringify(newTodos))
    setTodos(newTodos)
  }

  const handleCheckTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text)
    const newTodos = [...todos]
    newTodos[todoIndex].completed = true
    saveTodos(newTodos)
  }

  const handleDeleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text)
    const newTodos = [...todos]
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
  }

  return (
    <>
      <TodoCounter total={totalTodos} completed={completedTodos} />
      <TodoSearch query={query} setQuery={setQuery} />

      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onCheck={handleCheckTodo}
            onDelete={handleDeleteTodo}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  )
}

export default App
