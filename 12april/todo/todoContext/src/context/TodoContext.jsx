import { createContext, useState } from "react";

export const TodoContext = createContext();

export function TodoContexProvider({children}){
    const[todo, setTodo] = useState({task:"", isCompleted:false});
    const[todos, setTodos] = useState([]);
    const[filteredArr, setFilteredArr] = useState([]);
    const [flag, setFlag] = useState(true);

    function addTodoHandler(e){
       
        setTodo({...todo, task : e.target.value});
       
    }
   
    function todoListHandler(e){
         e.preventDefault();
         setFlag(true);
         setTodos((prev) => [...prev, todo]);
         setTodo({task:"", isCompleted:false});
         
    }
    const deleteHandler = (index) => {
       todos.splice(index,1);
       filteredArr.splice(index,1);
        setFilteredArr([...filteredArr])
        setTodos([...todos]);
    }

    const filterHandler = (e) =>{ 
        setFlag(false);

        if(e.target.value=="completed"){
          console.log('xyz')
         let doneArr = todos.filter(item => item.isCompleted==true);
          setFilteredArr(doneArr);

        }
        else if(e.target.value=="unCompleted"){
         let unDoneArr = todos.filter(item => item.isCompleted==false);
         setFilteredArr(unDoneArr);
        }
        else if(e.target.value=="all"){
            setFilteredArr(todos);
          }
    }
    
    return(
        <TodoContext.Provider value={{todo, addTodoHandler,todos,todoListHandler,setTodos,deleteHandler,filterHandler,filteredArr,flag}}>
            {children}
        </TodoContext.Provider>
    );

}