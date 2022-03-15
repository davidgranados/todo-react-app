import classNames from 'classnames'
import PropTypes from 'prop-types'

import styles from './todo-item.module.css'

const TodoItem = ({ text, completed = false }) => {
  const checkIconClassName = classNames(styles['icon'], styles['icon-check'], {
    [styles['icon-check--active']]: completed,
  })
  const textClassName = classNames(styles['todo-item-p'], {
    [styles['todo-item-p--completed']]: completed,
  })
  const deleteIconClassName = classNames(styles['icon'], styles['icon-delete'])
  const handleCheckIconClick = () => {
    alert('Ya completaste el todo ' + text)
  }
  const handleDeleteIconClick = () => {
    alert('Borraste el todo ' + text)
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
