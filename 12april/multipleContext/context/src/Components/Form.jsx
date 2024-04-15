import React, { useContext, useRef } from 'react'
import { AuthContext } from '../context/AuthContext'

const Form = () => {
    // here we are consuming the authcontext using usecontext.
    const{isAuth, authenticate, userInfo, userDetails} = useContext(AuthContext);
    const name = useRef(null);
    const email = useRef(null);
  return (
    <form onSubmit={authenticate}>
        <input placeholder='Enter your name' ref={name} name="userName" onInput={(e) => userDetails(e.target.value,e.target.name)}/>
        <input placeholder='Enter your email' ref={email} name='email' onInput={(e) => userDetails(e.target.value,e.target.name)}/>
        <button>login</button>
    </form>
  )
}

export default Form