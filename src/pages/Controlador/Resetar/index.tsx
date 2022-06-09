import styles from "./Resetar.module.scss";
import { useState, useEffect } from "react";
import ConfirmarReset from "../ConfirmarReset";
interface Props {
  setEntradas: React.Dispatch<
    React.SetStateAction<
      {
        quantia: string;
        categoria: string;
        data: string
      }[]
    >
  >;
  setSaidas: React.Dispatch<
    React.SetStateAction<
      {
        quantia: string;
        categoria: string;
        data: string
      }[]
    >
  >;
  setEstadoEntradas: React.Dispatch<React.SetStateAction<number>>,
  setEstadoSaidas: React.Dispatch<React.SetStateAction<number>>,
  aparecer: boolean,
  setAparecer: React.Dispatch<React.SetStateAction<boolean>>
}

const classNames = require("classnames");

export default function Resetar({
  setEntradas,
  setSaidas,
  aparecer,
  setAparecer,
  setEstadoEntradas,
  setEstadoSaidas,
}: Props) {
  const [deletar, setDeletar] = useState(false);
  useEffect(() => {
    if (deletar === true) {
      setEstadoEntradas(0);
      setEstadoSaidas(0);
      setEntradas([{ quantia: "", categoria: "", data: '' }]);
      setSaidas([{ quantia: "", categoria: "", data: '' }]);
      window.localStorage.removeItem("entradas");
      window.localStorage.removeItem("saidas");
      window.localStorage.removeItem("extrato");
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
