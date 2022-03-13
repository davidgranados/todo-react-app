import styles from './todo-list.module.css'
import PropTypes from 'prop-types'

// import { TodoItem } from '../todo-item'

const TodoList = ({ children }) => {
  return (
    <section>
      <ul className={styles['todo-list-ul']}>{children}</ul>
    </section>
  )
}

TodoList.propTypes = {
  // children: PropTypes.arrayOf(PropTypes.instanceOf(TodoItem)),
  children: PropTypes.element,
}

export default TodoList
