import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ComponenteUno from './components/ComponenteUno'
import Datos from './components/Datos'
import Formulario from './components/Formulario'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.bundle.min"
import Navegador from './components/Navegador'
import Dash from './pages/Dash'
import Login from './pages/Login'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import banner from './assets/banner.png'
import banner2 from './assets/banner2.png'
import banner3 from './assets/banner3.png'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dash />} />
          <Route path='Login' element={<Login />} />
        </Routes>
      </BrowserRouter>
      
      
      {/*<div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <ComponenteUno />
      <Datos
        name={"Danny"}
        age={32}
      />
      <Datos
        name={"David"}
        age={28}
      />
      <Formulario />*/}
    </>
  )
}

export default App
