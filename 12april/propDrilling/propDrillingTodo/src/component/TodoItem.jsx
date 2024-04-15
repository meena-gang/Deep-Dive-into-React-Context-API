import React from 'react'

const TodoItem = ({todo,id,todos,deleteToddo,checkHandler}) => {

  return (
    <div>
        {todo.task}
        <input type='checkbox' name="isCompleted" checked = {todos[id].isCompleted} onChange={(e) => checkHandler(e,id)} />
        <button onClick={ () => deleteToddo(id)}>Delete</button>
    </div>
  )
}

export default TodoItem;