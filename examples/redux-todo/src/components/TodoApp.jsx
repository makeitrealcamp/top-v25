import { useSelector } from 'react-redux'

import TodoForm from './TodoForm'
import TodoList from './TodoList'

function TodoApp() {
  // const [tasks, setTasks] = useState([])
  const tasks = useSelector((state)=>{
    return state.tasks
  })

  const handleAddTask = (newTask) => {
    // setTasks(tasks.concat(newTask))
  }

  const handleCleanDone = () => {
    const newList = tasks.filter((item) => !item.isCompleted)

    // setTasks(newList)
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


    // setTasks(taskUpdated)
  }

  return (
    <div>
      <TodoForm handleAddTask={handleAddTask} />
      <TodoList
        listTask={tasks}
        handleClear={handleCleanDone}
        handleEdit={handleEdit}
      />
    </div>
  )
}

export default TodoApp
