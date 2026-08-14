// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import nome from './calculo.tsx'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './Nosso.css'

function App() {
  // const [count, setCount] = useState(0)

  const n = nome;

  return (
    <>
      <img src={reactLogo} className='logo'></img>
      <input type='texto' value={n()}></input>
    </>
  )
}

export default App
