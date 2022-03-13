import styles from './todo-search.module.css'

const TodoSearch = () => {
  return (
    <input
      type="search"
      className={styles['todo-search']}
      placeholder="cebolla"
    />
  )
}

export default TodoSearch
