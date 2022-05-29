import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Controlador from './pages/Controlador'

export default function AppRouter() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Controlador></Controlador>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}