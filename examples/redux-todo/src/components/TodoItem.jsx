import { useDispatch } from 'react-redux'

import { removeteTask } from '../store/actions'

const TodoItem = (props) => {
  const dispatch = useDispatch()
  const { title, isDone, id, handleEdit } = props

  const handleDelete = () => {
    // disparar una acción para eliminar la tarea
    dispatch(removeteTask(id))
  }

  return(
    <li>
      <input
        type="checkbox"
        name="isCompleted"
        checked={isDone}
        onChange={() => { handleEdit({id, isDone}) }}
      />
      <span>{title}</span>
      <button onClick={handleDelete}>Eliminar</button>
    </li>
  )
}

export default TodoItem
