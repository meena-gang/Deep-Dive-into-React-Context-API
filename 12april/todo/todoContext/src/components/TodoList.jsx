import React from 'react'
import { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'


const TodoList = () => {
  const {todos, addTodoHandler, deleteHandler,setTodos,filteredArr,flag} = useContext(TodoContext);
  
  let data = flag ?  todos : filteredArr;
  console.log(flag);
  console.log(data,'data');

  return (
    <>
        {data.length > 0 ? data.map((item,i) => <div key={i}>
                                {item.task}
                                <input type='checkbox' name="isCompleted" checked={data[i].isCompleted } onChange = {(e) => {
                                  console.log(e.target.checked,'target input')
                                    data[i].isCompleted = e.target.checked;
                                    setTodos([...data]);
                                }}/>
                                <button onClick={ () => deleteHandler(i) }>Delete</button>
                            </div>) :
                            <h3>No Todo's Found!</h3>
          }
        
    </>
  );
}

export default TodoList