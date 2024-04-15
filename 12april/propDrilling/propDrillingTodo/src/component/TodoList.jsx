import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todos,deleteToddo,checkHandler}) => {
  return (
   <>
        {todos.map((item,i) => <TodoItem todo={item} key={i} id={i} todos={todos} deleteToddo={deleteToddo} checkHandler={checkHandler}/>)}
   </>
  )
}

export default TodoList