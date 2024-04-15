import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const Navbar = () => {
   // here we are consuming the themecontext using usecontext.
  const {theme, toggleTheme} = useContext(ThemeContext);

  return (
    <>
    <div style={{width:"100vw",border: "1px solid black", backgroundColor:theme ? "black" : "white",position: "fixed",
                  top: "0",left: "0", height: "80px",color:"red"}}>
    <button onClick={() => toggleTheme()}>ToggleTheme</button>  
    </div>
    </>           
  )
}

export default Navbar


