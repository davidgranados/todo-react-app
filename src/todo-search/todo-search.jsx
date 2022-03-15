import { useState } from 'react'
import PropTypes from 'prop-types'

import styles from './todo-search.module.css'

const TodoSearch = ({ placeholder = 'cebolla' }) => {
  const [query, setQuery] = useState('')
  const handleChange = (event) => {
    console.log(
      '🚀 ~ file: todo-search.jsx ~ line 8 ~ handleChange ~ event.target.value',
      event.target.value
    )
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
