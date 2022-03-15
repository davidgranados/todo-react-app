import styles from './create-todo-button.module.css'

const CreateTodoButton = () => {
  const handleClick = () => {
    alert('Aquí se debería abrir un modal')
  }
  return (
    <button className={styles['create-todo-button']} onClick={handleClick}>
      +
    </button>
  )
}

export default CreateTodoButton
