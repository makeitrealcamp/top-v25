import TodoItem from "./TodoItem"


const TodoList = (props) => {
  const { listTask, handleClear, handleEdit } = props
  return(
    <div>
      <h4>lista de tareas</h4>
      <ul>
        {
          listTask.map((item) => {
            return (
              <TodoItem
                key={item.id}
                id={item.id}
                title={item.title}
                isDone={item.isCompleted}
                handleEdit={handleEdit}
              />
            )
          })
        }
      </ul>

      <hr />

      <button onClick={handleClear}>
        Clear Completed
      </button>
    </div>
  )
}

export default TodoList
