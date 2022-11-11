import { useState } from 'react'

import TodoForm from './componets/TodoForm'
import TodoList from './componets/TodoList'

import './App.css'

const randomTask = {
  id: 1,
  title: 'Insertar en la DB',
  isCompleted: true
}
const randomTask2 = {
  id: 2,
  title: 'giT cOMMIT',
  isCompleted: false
}

function App() {
  const [tasks, setTasks] = useState([randomTask, randomTask2])

  const handleAddTask = (newTask) => {
    setTasks(tasks.concat(newTask))
  }

  const handleCleanDone = () => {
    const newList = tasks.filter((item) => !item.isCompleted)

    setTasks(newList)
  }

  const handleEdit = (task) => {
    const taskUpdated = tasks.map((item) => {
      if (item.id === task.id) {
        const taskUpdated = {
          ...item,
          isCompleted: !task.isDone
        }

        return taskUpdated
      }

      return item
    })


    setTasks(taskUpdated)
  }

  return (
    <div className="App">
      <TodoForm handleAddTask={handleAddTask} />
      <TodoList
        listTask={tasks}
        handleClear={handleCleanDone}
        handleEdit={handleEdit}
      />
    </div>
  )
}

export default App
