import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { addTask } from '../store/actions'


const TodoForm = () => {
  const [inputValue, setInputValue] = useState('')
  const dispatch = useDispatch()

  const handleChange = ({ target }) => {
    const { value } = target

    // guardar cada cambio en una variable de estado
    setInputValue(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const task = {
      name: inputValue,
      completed: false,
    }

    // TODO: your code here
    dispatch(addTask(task))
  }

  return(
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder='Enter task'
        name="task"
        onChange={handleChange}
      />
      <button type='submit'>
        Add Task
      </button>
    </form>
  )
}

export default TodoForm
