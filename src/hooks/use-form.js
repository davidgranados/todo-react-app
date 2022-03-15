import { useState } from 'react'

const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState)

  const reset = () => {
    setValues(initialState)
  }

  const handleInputChange = ({ target }) => {
    setValues((prevState) => {
      return {
        ...prevState,
        [target.name]: target.value,
      }
    })
  }

  return [values, handleInputChange, reset]
}

export default useForm
