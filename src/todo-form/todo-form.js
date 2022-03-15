import PropTypes from 'prop-types'

import { useForm } from '../hooks'

const TodoForm = ({
  onSubmit,
  onClickCancelButton,
  textPlaceholder = 'hacer..',
}) => {
  const [values, handleInputChange, reset] = useForm({ todoText: '' })

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit(values)
    reset()
  }
  const handleCancelButtonClick = (event) => {
    onClickCancelButton(event)
  }
  return (
    <form onSubmit={handleSubmit}>
      <label></label>
      <textarea
        name="todoText"
        value={values.todoText}
        placeholder={textPlaceholder}
        onChange={handleInputChange}
      />
      <div>
        <button type="button" onClick={handleCancelButtonClick}>
          Cancelar
        </button>
        <button type="submit">enviar</button>
      </div>
    </form>
  )
}

TodoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onClickCancelButton: PropTypes.func.isRequired,
  textPlaceholder: PropTypes.string,
}

export default TodoForm
