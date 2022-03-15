import PropTypes from 'prop-types'

import { TodoItem } from '../todo-item'

import styles from './todo-list.module.css'

const TodoList = ({ children }) => {
  console.log('🚀 ~ file: todo-list.jsx ~ line 5', 'Render TodoList')

  return (
    <section>
      <ul className={styles['todo-list-ul']}>{children}</ul>
    </section>
  )
}

TodoList.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.instanceOf(TodoItem)),
  ]),
}

export default TodoList
