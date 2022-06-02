import { Outlet } from "react-router-dom";
import Cabecalho from "../Cabecalho";

export default function PaginaPadrao() {
  return(
    <>
      <div>
        <Outlet></Outlet>
      </div>
    </>
  )
}