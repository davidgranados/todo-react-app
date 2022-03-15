import PropTypes from 'prop-types'

import styles from './todo-counter.module.css'

const TodoCounter = ({ total, completed }) => {
  console.log('🚀 ~ file: todo-counter.jsx ~ line 6', 'Render TodoCounter')
  return (
    <h2
      className={styles['todo-counter']}
    >{`Has completado ${completed} de ${total} TODOs`}</h2>
  )
}

TodoCounter.propTypes = {
  total: PropTypes.number.isRequired,
  completed: PropTypes.number.isRequired,
}

export default TodoCounter
