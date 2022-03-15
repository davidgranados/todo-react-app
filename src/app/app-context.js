import { useState, createContext } from 'react'
import PropTypes from 'prop-types'

import { useLocalStorage } from '../hooks'

const TodoContext = createContext()

const TodoProvider = ({ children }) => {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', [])

  const [query, setQuery] = useState('')
  const [openModal, setOpenModal] = useState(false)

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
    <TodoContext.Provider
      value={{
        todos,
        saveTodos,
        loading,
        error,
        query,
        setQuery,
        completedTodos,
        totalTodos,
        searchedTodos,
        handleCheckTodo,
        handleDeleteTodo,
        openModal,
        setOpenModal,
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}

TodoProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
}

export { TodoContext, TodoProvider }
