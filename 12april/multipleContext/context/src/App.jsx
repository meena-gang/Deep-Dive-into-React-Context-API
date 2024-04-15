import { useContext } from 'react'
import './App.css'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { AuthContext } from './context/AuthContext'
import Form from './Components/Form';

function App() {
  const{isAuth, authenticate, userInfo, userDetails} = useContext(AuthContext);
  return (
    <>
      <Navbar />
      {isAuth ? <Home/> : <Form/>}
    </>
  )
}

export default App
