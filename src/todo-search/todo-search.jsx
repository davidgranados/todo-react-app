import { useContext } from 'react'
import PropTypes from 'prop-types'

import { TodoContext } from '../app/app-context'

import styles from './todo-search.module.css'

const TodoSearch = ({ placeholder = 'cebolla' }) => {
  console.log('🚀 ~ file: todo-search.jsx ~ line 6', 'Render TodoSearch')
  const { query, setQuery } = useContext(TodoContext)
  const handleChange = (event) => {
    setQuery(event.target.value)
  }
  return (
    <input
      type="search"
      className={styles['todo-search']}
      placeholder={placeholder}
      onChange={handleChange}
      value={query}
    />
  )
}

TodoSearch.propTypes = {
  placeholder: PropTypes.string,
}

export default TodoSearch
