import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Login from './components/Login'
import Rutas from './rutas/rutas'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Rutas/>
    </div>
  )
}

export default App
