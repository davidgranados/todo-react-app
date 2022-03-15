import PropTypes from 'prop-types'

import styles from './todo-search.module.css'

const TodoSearch = ({ setQuery, query = '', placeholder = 'cebolla' }) => {
  console.log('🚀 ~ file: todo-search.jsx ~ line 6', 'Render TodoSearch')
  const handleChange = (event) => {
    console.log(
      '🚀 ~ file: todo-search.jsx ~ line 12 ~ handleChange ~ event.target.value',
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
  setQuery: PropTypes.func.isRequired,
  query: PropTypes.string,
  placeholder: PropTypes.string,
}

export default TodoSearch
