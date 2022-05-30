import { BrowserRouter, Route, Routes} from 'react-router-dom'
import PaginaPadrao from './components/PaginaPadrao'
import Controlador from './pages/Controlador'

export default function AppRouter() {
  return(
    <BrowserRouter>
      <main>
      <Routes>
        <Route path='/' element={<PaginaPadrao></PaginaPadrao>}>
          <Route index element={<Controlador></Controlador>}></Route>
        </Route>
      </Routes>
      </main>
    </BrowserRouter>
  )
}