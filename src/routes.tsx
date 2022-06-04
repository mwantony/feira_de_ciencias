import Cabecalho from "components/Cabecalho";
import NotFound from "components/NotFound";
import Aplicativo from "pages/Aplicativo";
import Carteira from "pages/Carteira";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaginaPadrao from "./components/PaginaPadrao";
import Controlador from "./pages/Controlador";

export default function AppRouter() {
  const [selecionado, setSelecionado] = useState(-1);
  useEffect(() => {
    if (window.location.href === 'http://localhost:3000/') {
      setSelecionado(0)
    }
    if (window.location.href === "http://localhost:3000/carteira") {
      setSelecionado(1);
    }
    if (window.location.href === "http://localhost:3000/aplicativo") {
      setSelecionado(2);
    }
    console.log("s");
  }, [setSelecionado]);
  const [dEntradas, setDEntradas] = useState(0);
  const [dSaidas, setDSaidas] = useState(0);
  const [dTotal, setDTotal] = useState(0);
  return (
    <BrowserRouter>
      <Cabecalho
        selecionado={selecionado}
        setSelecionado={setSelecionado}
      ></Cabecalho>
      <main>
        <Routes>
          <Route path="/" element={<PaginaPadrao></PaginaPadrao>}>
            <Route
              index
              element={
                <Controlador
                  setDEntradas={setDEntradas}
                  setDSaidas={setDSaidas}
                  setDTotal={setDTotal}
                ></Controlador>
              }
            ></Route>
            <Route
              path="carteira"
              element={
                <Carteira
                  entradas={dEntradas}
                  saidas={dSaidas}
                  total={dTotal}
                ></Carteira>
              }
            ></Route>
            <Route
              path="aplicativo"
              element={<Aplicativo></Aplicativo>}
            ></Route>
          </Route>
          <Route path="*" element={<NotFound setSelecionado={setSelecionado}></NotFound>}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}
