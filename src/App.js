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

function useLocalStorage(itemName, initialValue) {
  const localStorageItem = localStorage.getItem(itemName)

  let parsedItem

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue))
    parsedItem = []
  } else {
    parsedItem = JSON.parse(localStorageItem)
  }

  const [item, setItem] = useState(parsedItem)

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem)
  }

  return [item, saveItem]
}

function App() {
  console.log('🚀 ~ file: App.js ~ line 16', 'render app')

  const [todos, saveTodos] = useLocalStorage('TODOS_V1', [])

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
