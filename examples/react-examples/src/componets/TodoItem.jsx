const TodoItem = (props) => {
  const { title, isDone, id, handleEdit } = props
  return(
    <li>
      <input
        type="checkbox"
        name="isCompleted"
        checked={isDone}
        onChange={() => { handleEdit({id, isDone}) }}
      />
      <span>{title}</span>
    </li>
  )
}

export default TodoItem
