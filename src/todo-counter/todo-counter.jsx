import { useContext } from 'react'

import { TodoContext } from '../app/app-context'

import styles from './todo-counter.module.css'

const TodoCounter = () => {
  const { totalTodos, completedTodos } = useContext(TodoContext)
  console.log('🚀 ~ file: todo-counter.jsx ~ line 6', 'Render TodoCounter')
  return (
    <h2
      className={styles['todo-counter']}
    >{`Has completado ${completedTodos} de ${totalTodos} TODOs`}</h2>
  )
}

export default TodoCounter
