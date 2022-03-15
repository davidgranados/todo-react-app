import { useContext } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import { TodoContext } from '../app/app-context'

import styles from './todo-item.module.css'

const TodoItem = ({ text, completed = false }) => {
  console.log('🚀 ~ file: todo-item.jsx ~ line 7', `Render TodoItem ${text}`)

  const { handleCheckTodo, handleDeleteTodo } = useContext(TodoContext)
  const checkIconClassName = classNames(styles['icon'], styles['icon-check'], {
    [styles['icon-check--active']]: completed,
  })
  const textClassName = classNames(styles['todo-item-p'], {
    [styles['todo-item-p--completed']]: completed,
  })
  const deleteIconClassName = classNames(styles['icon'], styles['icon-delete'])

  const handleCheckIconClick = () => {
    handleCheckTodo(text)
  }
  const handleDeleteIconClick = () => {
    handleDeleteTodo(text)
  }
  return (
    <li className={styles['todo-item']}>
      <span className={checkIconClassName} onClick={handleCheckIconClick}>
        √
      </span>
      <p className={textClassName}>{text}</p>
      <span className={deleteIconClassName} onClick={handleDeleteIconClick}>
        X
      </span>
    </li>
  )
}

TodoItem.propTypes = {
  text: PropTypes.string,
  completed: PropTypes.bool,
}

export default TodoItem
