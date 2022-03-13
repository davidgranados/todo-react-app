import { TodoCounter } from './todo-counter'
import { TodoSearch } from './todo-search'
import { TodoList } from './todo-list'
import { TodoItem } from './todo-item'
import { CreateTodoButton } from './create-todo-button'

const todos = [
  { text: 'tarea 1', completed: false },
  { text: 'tarea 2', completed: false },
  { text: 'tarea 3', completed: true },
]

function App() {
  return (
    <>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {todos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  )
}

export default App
