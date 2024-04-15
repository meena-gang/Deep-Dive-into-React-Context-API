import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { TodoContexProvider } from './context/TodoContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <TodoContexProvider>
    <App />
  </TodoContexProvider>
 
)
