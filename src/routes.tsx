import Cabecalho from 'components/Cabecalho'
import Carteira from 'pages/Carteira'
import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation} from 'react-router-dom'
import PaginaPadrao from './components/PaginaPadrao'
import Controlador from './pages/Controlador'

export default function AppRouter() {
  const [selecionado, setSelecionado] = useState(0)
  useEffect(() => {
    if(window.location.href === 'http://localhost:3000/carteira') {
      setSelecionado(1)
    }
    console.log('s')
  })
  const [dEntradas, setDEntradas] = useState(0)
  const [dSaidas, setDSaidas] = useState(0)
  const [dTotal, setDTotal] = useState(0)
  return(
    <BrowserRouter>
      <Cabecalho selecionado={selecionado} setSelecionado={setSelecionado}></Cabecalho>
      <main>
      <Routes>
        <Route path='/' element={<PaginaPadrao></PaginaPadrao>}>
          <Route index element={<Controlador setDEntradas={setDEntradas} setDSaidas={setDSaidas} setDTotal={setDTotal}></Controlador>}></Route>
          <Route path='carteira' element={<Carteira entradas={dEntradas} saidas={dSaidas} total={dTotal}></Carteira>}></Route>
        </Route>
      </Routes>
      </main>
    </BrowserRouter>
  )
}