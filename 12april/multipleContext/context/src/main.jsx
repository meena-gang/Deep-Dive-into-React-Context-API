import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {ThemeContextProvider} from './context/ThemeContext.jsx'
import { AuthContextProvider } from './context/AuthContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // here we are wrapping app with authProvider and themeProvider so that state defined in these provider functions will 
  // be available through all components.
<AuthContextProvider>
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>
  </AuthContextProvider>
  
)
