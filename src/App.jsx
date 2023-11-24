import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Login } from './Pages/Auth/Login'
import SignUp from './Pages/Auth/SignUp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello world</h1>
      <Login/>
      <SignUp/>
    </>
  )
}

export default App
