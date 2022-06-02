import { useEffect, useState } from "react";
import ConfirmarTransacao from "../ConfirmarReset";
import styles from "./Resetar.module.scss";

interface Props {
  setEntradas: React.Dispatch<
    React.SetStateAction<
      {
        quantia: string;
      }[]
    >
  >;
  setSaidas: React.Dispatch<
    React.SetStateAction<
      {
        quantia: string;
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
  const [fechar, setFechar] = useState(true);
  useEffect(() => {
    if (deletar === true) {
      setEstadoEntradas(0);
      setEstadoSaidas(0);
      setEntradas([{ quantia: "" }]);
      setSaidas([{ quantia: "" }]);
      window.localStorage.removeItem("entradas");
      window.localStorage.removeItem("saidas");
    }
  }, [setEstadoEntradas, setEstadoSaidas, setEntradas, setSaidas, deletar]);
  return (
    <div className={styles.resetar}>
      <ConfirmarTransacao
        setDeletar={setDeletar}
        fechar={fechar}
        setFechar={setFechar}
      ></ConfirmarTransacao>
      <button
        className={classNames({
          [styles.resetar__button]: true,
        })}
        onClick={() => {
          setFechar(false);
          if (deletar === true) {
            setEstadoEntradas(0);
            setEstadoSaidas(0);
            setEntradas([{ quantia: "" }]);
            setSaidas([{ quantia: "" }]);
            window.localStorage.removeItem("entradas");
            window.localStorage.removeItem("saidas");
          }
        }}
      >
        Resetar
      </button>
    </div>
  );
}
