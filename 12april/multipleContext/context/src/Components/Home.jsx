import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'



const Home = () => {
     // here we are consuming the authcontext using usecontext.
    const {isAuth} = useContext(AuthContext)
  return (
    <>
        
        <div>Home</div>
        <button>logout</button>
      
    </>
  )
}

export default Home