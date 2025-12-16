import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1> Hello React!</h1>
      <p>you clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  )
}

export default App
