import React from 'react'

const TodoForm = ({addTodo,submitTodo,todo,filterTodos}) => {

  return (
    <>
        <form onSubmit={(e) => submitTodo(e)}>
            <input placeholder='Enter a new todo' name="task"  value={todo.task} onChange={(e) => addTodo(e)} />
            <button>Add Todo</button> <br />
            <select onChange={(e) => filterTodos(e)}> 
              <option value="">All</option>
              <option  value="true">Completed</option>
              <option  value="false">Uncompleted</option>
            </select> 
        </form>
    </>
  )
}

export default TodoForm;