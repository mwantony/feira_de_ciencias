import { Outlet } from "react-router-dom";
import Cabecalho from "../Cabecalho";

export default function PaginaPadrao() {
  return(
    <>
      <Cabecalho></Cabecalho>
      <div>
        <Outlet></Outlet>
      </div>
    </>
  )
}