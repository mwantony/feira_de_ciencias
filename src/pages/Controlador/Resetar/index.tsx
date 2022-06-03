import styles from "./Resetar.module.scss";
import { useState, useEffect } from "react";
import ConfirmarReset from "../ConfirmarReset";
interface Props {
  setEntradas: React.Dispatch<
    React.SetStateAction<
      {
        quantia: string;
        categoria: string;
      }[]
    >
  >;
  setSaidas: React.Dispatch<
    React.SetStateAction<
      {
        quantia: string;
        categoria: string;
      }[]
    >
  >;
  setEstadoEntradas: React.Dispatch<React.SetStateAction<number>>;
  setEstadoSaidas: React.Dispatch<React.SetStateAction<number>>;
}

const classNames = require("classnames");

export default function Resetar({
  setEntradas,
  setSaidas,
  setEstadoEntradas,
  setEstadoSaidas,
}: Props) {
  const [deletar, setDeletar] = useState(false);
  const [aparecer, setAparecer] = useState(false);
  useEffect(() => {
    if (deletar === true) {
      setEstadoEntradas(0);
      setEstadoSaidas(0);
      setEntradas([{ quantia: "", categoria: "" }]);
      setSaidas([{ quantia: "", categoria: "" }]);
      window.localStorage.removeItem("entradas");
      window.localStorage.removeItem("saidas");
      setDeletar(false);
    }
  }, [setEstadoEntradas, setEstadoSaidas, setEntradas, setSaidas, deletar]);
  return (
    <div className={styles.resetar}>
      <ConfirmarReset
        setDeletar={setDeletar}
        aparecer={aparecer}
        setAparecer={setAparecer}
      ></ConfirmarReset>
      <button
        className={classNames({
          [styles.resetar__button]: true,
        })}
        onClick={() => {
          setAparecer(true);
        }}
      >
        Resetar
      </button>
    </div>
  );
}
