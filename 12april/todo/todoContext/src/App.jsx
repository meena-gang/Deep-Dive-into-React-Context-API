import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoForm from './components/TodoForm'
import { TodoContext } from './context/TodoContext'
import TodoList from './components/TodoList'

function App() {
 const {todos} = useContext(TodoContext);
  return (
    <>
      <TodoForm />
      {todos.length > 0 && <TodoList/>}
    </>
  )
}

export default App
