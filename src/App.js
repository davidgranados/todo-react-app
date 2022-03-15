import { useState } from 'react'

import { TodoCounter } from './todo-counter'
import { TodoSearch } from './todo-search'
import { TodoList } from './todo-list'
import { TodoItem } from './todo-item'
import { CreateTodoButton } from './create-todo-button'

const defaultTodos = [
  { text: 'tarea 1', completed: false },
  { text: 'tarea 2', completed: false },
  { text: 'tarea 3', completed: true },
]

function App() {
  console.log('🚀 ~ file: App.js ~ line 16', 'render app')

  const [todos, setTodos] = useState(defaultTodos)
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

  const handleCheckTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text)
    setTodos((prevState) => {
      const newTodos = [...prevState]
      newTodos[todoIndex].completed = true
      return newTodos
    })
  }

  const handleDeleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text)
    setTodos((prevState) => {
      const newTodos = [...prevState]
      newTodos.splice(todoIndex, 1)
      return newTodos
    })
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
