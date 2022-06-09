import Cabecalho from "components/Cabecalho";
import NotFound from "components/NotFound";
import Extrato from "pages/Extrato";
import Carteira from "pages/Carteira";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Controlador from "./pages/Controlador";
import { buildData } from "common/func/retornaData";

export default function AppRouter() {
  if(!localStorage.extrato) {
    localStorage.extrato = JSON.stringify([
      {
        quantia: "",
        categoria: "",
        data: "",
        negativo: false
      },
    ])
  }
  const [extrato, setExtrato] = useState(JSON.parse(localStorage.extrato));
  let dataExt: Array<any> = JSON.parse(localStorage.extrato) || [
    { quantia: "", categoria: "", data: '' },
  ];
  const [forma, setForma] = useState(1);
  const [selecionado, setSelecionado] = useState(-1);
  useEffect(() => {
    if (window.location.href === "https://www.hicash.ga/controlador") {
      setSelecionado(0);
    }
    if (window.location.href === "https://www.hicash.ga/carteira") {
      setSelecionado(1);
    }
    if (window.location.href === "https://www.hicash.ga/extrato") {
      setSelecionado(2);
    }
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
          <Route
            path="/controlador"
            element={
              <Controlador
                forma={forma}
                setForma={setForma}
                extrato={extrato}
                setExtrato={setExtrato}
                setDEntradas={setDEntradas}
                setDSaidas={setDSaidas}
                setDTotal={setDTotal}
              ></Controlador>
            }
          ></Route>
          <Route
            path="/carteira"
            element={
              <Carteira
                entradas={dEntradas}
                saidas={dSaidas}
                total={dTotal}
              ></Carteira>
            }
          ></Route>
          <Route
            path="/extrato"
            element={<Extrato dataExt={dataExt} forma={forma} extrato={extrato}></Extrato>}
          ></Route>
          <Route
            path="*"
            element={<NotFound setSelecionado={setSelecionado}></NotFound>}
          ></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}
