import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Login } from './Pages/Auth/Login'
import SignUp from './Pages/Auth/SignUp'
import {   BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
  Navigate,} from 'react-router-dom'
import Dashboard from './Pages/Dashboard/Dashboard'
import Profile from './Pages/Dashboard/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>

    <Routes>

    <Route path="/" element={  <Login/>} />
    <Route path="/signup" element={  <SignUp/>} />
    <Route path="/dashboard" element={  <Dashboard/>} />
    <Route path="/profile" element={<Profile/>} />

    </Routes>

    </BrowserRouter>
      {/* <h1>Hello world</h1> */}
    
      {/* <SignUp/> */}
    </>
  )
}

export default App
