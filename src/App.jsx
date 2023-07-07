import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [sobrenome, setSobrenome] = useState('Brito')

  const morfar = () => {
    setSobrenome(sobrenome.toUpperCase())
    
  }


  /*let sobrenome = 'Brito'*/

  return (
    <>
      <h1>Claudio</h1>
      <div>{sobrenome}</div>
      <button type="button" onClick={morfar}>Morfar!</button> 
    </>
  )
}

export default App
