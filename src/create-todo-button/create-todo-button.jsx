import classNames from 'classnames'
import PropTypes from 'prop-types'
import { useContext } from 'react'

import { TodoContext } from '../app/app-context'

import styles from './create-todo-button.module.css'

const CreateTodoButton = ({ onClick }) => {
  const { openModal } = useContext(TodoContext)

  const createButtonClassName = classNames(styles['create-todo-button'], {
    [styles['create-todo-button-reverse']]: openModal,
  })
  const handleClick = (event) => {
    onClick(event)
  }
  return (
    <button className={createButtonClassName} onClick={handleClick}>
      +
    </button>
  )
}

CreateTodoButton.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default CreateTodoButton
