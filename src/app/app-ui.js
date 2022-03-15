import { TodoCounter } from '../todo-counter'
import { TodoSearch } from '../todo-search'
import { TodoList } from '../todo-list'
import { TodoItem } from '../todo-item'
import { CreateTodoButton } from '../create-todo-button'

import { TodoContext } from './app-context'

const AppUI = () => {
  console.log('🚀 ~ file: AppUI.js ~ line 10', 'render app-ui')
  return (
    <>
      <TodoCounter />
      <TodoSearch />

      <TodoContext.Consumer>
        {({ error, loading, searchedTodos }) => (
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
        )}
      </TodoContext.Consumer>

      <CreateTodoButton />
    </>
  )
}

export default AppUI
