import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoForm from './component/TodoForm';
import TodoList from './component/TodoList';

function App() {
  const [todo, setTodo] = useState({task:"", isCompleted:false});
  const[todoArr, setTodoArr] = useState([]);
  const[filteredTodo, setFilteredTodo] = useState([]);
  const[flag, setFlag] = useState(true);
  const addTodoHandler = (e) => {
      setTodo({...todo, task:e.target.value})
  }
  const submitHandler = (e) => {
    setFlag(true);
    e.preventDefault();
    setTodoArr([...todoArr, todo]);
    setTodo({task:"", isCompleted:false});
  }
  const deleteHandler = (id) => {
    console.log(id);
    todoArr.splice(id,1);
    filteredTodo.splice(id,1);
    setTodoArr([...todoArr]);
    setFilteredTodo([...filteredTodo])
  }
  const filterHandler = (e) => {
     setFlag(false);
     let newArr = [...todoArr];
     if(e.target.value==""){
      console.log('all')
        setFilteredTodo([...todoArr])
     }
     else{

      console.log(typeof(e.target.value), 'filtered')
      let filteredArr  = newArr.filter(item => (item.isCompleted).toString() == e.target.value);
      
      setFilteredTodo([...filteredArr]);
     }
  }
  const checkHandlerCompleted = (e,id) => {
    console.log(e,id);
    console.log(todoArr);
    todoArr[id].isCompleted = e.target.checked;
    setTodoArr([...todoArr]);
  }
  // console.log(todoArr);
  return (
    <>
        <TodoForm addTodo={addTodoHandler} submitTodo={submitHandler} todo={todo} filterTodos={filterHandler}/>
        <TodoList todos={flag ? todoArr : filteredTodo} deleteToddo={deleteHandler} checkHandler={checkHandlerCompleted} />
      
    </>
  )
}

export default App
