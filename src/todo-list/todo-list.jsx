import styles from './todo-list.module.css'
import PropTypes from 'prop-types'

const TodoList = ({ children }) => {
  console.log('🚀 ~ file: todo-list.jsx ~ line 5', 'Render TodoList')

  return (
    <section>
      <ul className={styles['todo-list-ul']}>{children}</ul>
    </section>
  )
}

TodoList.propTypes = {
  children: PropTypes.array,
}

export default TodoList
