import { TodoCounter } from '../todo-counter'
import { TodoSearch } from '../todo-search'
import { TodoList } from '../todo-list'
import { TodoItem } from '../todo-item'
import { CreateTodoButton } from '../create-todo-button'
import { Modal } from '../modal'

import { TodoContext } from './app-context'
import { useContext } from 'react'
import { TodoForm } from '../todo-form'

const AppUI = () => {
  console.log('🚀 ~ file: AppUI.js ~ line 10', 'render app-ui')
  const {
    error,
    loading,
    searchedTodos,
    openModal,
    setOpenModal,
    handleAddTodo,
  } = useContext(TodoContext)

  const handleCreateButtonClick = () => {
    setOpenModal((prevState) => !prevState)
  }
  const handleFormSubmit = (values) => {
    handleAddTodo(values.todoText)
    setOpenModal(false)
  }
  const handleFormCancelButtonClick = () => {
    setOpenModal(false)
  }
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {error && <p>oops!...</p>}
        {loading && <p>Loading...</p>}
        {!loading && !searchedTodos.length && <p>Crea tu primer todo</p>}
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>
      <CreateTodoButton onClick={handleCreateButtonClick} />
      {openModal && (
        <Modal>
          <TodoForm
            onSubmit={handleFormSubmit}
            onClickCancelButton={handleFormCancelButtonClick}
          />
        </Modal>
      )}
    </>
  )
}

export default AppUI
