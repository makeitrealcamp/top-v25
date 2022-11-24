import { useState } from 'react'

const TodoForm = ({ handleAddTask }) => {
  const [inputValue, setInputValue] = useState('')

  const handleChange = ({ target }) => {
    const { value, name } = target

    // guardar cada cambio en una variable de estado
    setInputValue(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newTask = {
      id: Math.floor(Math.random() * 100),
      title: inputValue,
      isCompleted: false,
    }

    // TODO: your code here
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
