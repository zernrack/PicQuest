import { useState } from 'react'
import Registration from '../src/pages/registration/registration'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Registration />
    </>
  )
}

export default App
