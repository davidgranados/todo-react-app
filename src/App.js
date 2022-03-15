import { useState, useEffect } from 'react'

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
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [item, setItem] = useState(initialValue)

  useEffect(() => {
    try {
      setTimeout(() => {}, 1000)
      const localStorageItem = localStorage.getItem(itemName)

      let parsedItem

      if (!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(initialValue))
        parsedItem = []
      } else {
        parsedItem = JSON.parse(localStorageItem)
      }
      setItem(parsedItem)
      setLoading(false)
    } catch (error) {
      setError(error)
    }
  }, [])

  const saveItem = (newItem) => {
    try {
      localStorage.setItem(itemName, JSON.stringify(newItem))
      setItem(newItem)
    } catch (error) {
      setError(error)
    }
  }

  return { item, saveItem, loading, error }
}

function App() {
  console.log('🚀 ~ file: App.js ~ line 38', 'render app')

  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', [])

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

  console.log('🚀 ~ file: App.js ~ line 70', 'before use effect')
  useEffect(() => {
    console.log('🚀 ~ file: App.js ~ line 72', 'use effect')
  }, [totalTodos])
  console.log('🚀 ~ file: App.js', 'after use effect')

  return (
    <>
      <TodoCounter total={totalTodos} completed={completedTodos} />
      <TodoSearch query={query} setQuery={setQuery} />

      <TodoList>
        {error && <p>oops!...</p>}
        {loading && <p>Loading...</p>}
        {!loading && !searchedTodos.length && <p>Crea tu primer todo</p>}
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
