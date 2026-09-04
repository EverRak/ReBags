// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import nome from './calculo.tsx'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './Nosso.css'

import { BrowserRouter, Link, Route, Routes } from "react-router-dom"

import Index from './Principal.tsx'; // seu componente index.tsx
import Sobre from './App.tsx'; // seu componente sobre.tsx

function App() {
  // const [count, setCount] = useState(0)

  // const n = nome;

  return (
    <BrowserRouter>
      {/* Opcional: Um menu de navegação que aparece em todas as páginas */}
      <nav>
        <Link to="/">Home</Link> | <Link to="/sobre">Sobre</Link>
      </nav>

      {/* Configuração das páginas/módulos que serão trocados dinamicamente */}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
