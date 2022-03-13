import classNames from 'classnames'
import PropTypes from 'prop-types'

import styles from './todo-item.module.css'

const TodoItem = ({ text, completed = false }) => {
  const todoItemCheckIconClassName = classNames(
    styles['icon'],
    styles['icon-check'],
    {
      [styles['icon-check--active']]: completed,
    }
  )
  const todoItemTextClassName = classNames(styles['todo-item-p'], {
    [styles['todo-item-p--completed']]: completed,
  })
  const todoItemDeleteIconClassName = classNames(
    styles['icon'],
    styles['icon-delete']
  )
  return (
    <li className={styles['todo-item']}>
      <span className={todoItemCheckIconClassName}>√</span>
      <p className={todoItemTextClassName}>{text}</p>
      <span className={todoItemDeleteIconClassName}>X</span>
    </li>
  )
}

TodoItem.propTypes = {
  text: PropTypes.string,
  completed: PropTypes.bool,
}

export default TodoItem
