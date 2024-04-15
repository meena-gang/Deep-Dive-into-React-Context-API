import React, { useContext, useRef, useState } from 'react'
import { TodoContext } from '../context/TodoContext';

const TodoForm = () => {
    
    
    const {todo, addTodoHandler,todoListHandler,todos,filterHandler} = useContext(TodoContext);
    
    console.log(todos);
  return (
    <>
        <form onSubmit={todoListHandler}>
            <input placeholder='Enter a new todo' name="task" value={todo.task} onChange={(e) => addTodoHandler(e)} />
            <button>Add Todo</button> <br />
            {todos.length > 0 ? 
            <select onChange={(e) => filterHandler(e)}> 
              <option value="all">All</option>
              <option  value="completed">Completed</option>
              <option  value="unCompleted">Uncompleted</option>
            </select> : "Please add Todo!"}
        </form>
    </>
  )
}

export default TodoForm;