import { useEffect, useState } from "react";
import styles from "./Controlador.module.scss";
import Estado from "./Estado";
import Forma from "./Forma";
import Resetar from "./Resetar";
export default function Controlador() {
  const [dadosInput, setDadosInput] = useState("");
  const [entradas, setEntradas] = useState([
    {
      quantia: "",
    },
  ]);
  const [saidas, setSaidas] = useState([
    {
      quantia: "",
    },
  ]);
  if (!localStorage.entradas) {
    localStorage.entradas = JSON.stringify(entradas);
  }
  if (!localStorage.saidas) {
    localStorage.saidas = JSON.stringify(saidas);
  }
  let totalEntradas = 0
  const [estadoEntradas, setEstadoEntradas] = useState(totalEntradas);
  let totalSaidas = 0
  const [estadoSaidas, setEstadoSaidas] = useState(totalSaidas);
  const [selecionado, setSelecionado] = useState(entradas);
  const [forma, setForma] = useState(1);
  const [estadoAtual, setEstadoAtual] = useState(estadoEntradas - estadoSaidas)
  useEffect(() => {
    setEstadoAtual(estadoEntradas - estadoSaidas)
    if(totalEntradas !== totalEntradas - 1) {
      setEstadoEntradas(totalEntradas)
      setEstadoAtual(estadoEntradas - estadoSaidas)
    }
    if(totalSaidas !== totalSaidas - 1) {
      setEstadoSaidas(totalSaidas)
      setEstadoAtual(estadoEntradas - estadoSaidas)
    }
    if (forma === 1) {
      setSelecionado([...entradas]);
    } else {
      setSelecionado([...saidas]);
    }
  }, [forma, entradas, saidas, totalEntradas, totalSaidas, estadoEntradas, estadoSaidas]);
  const classNames = require("classnames");
  let dataEnt: Array<any> = JSON.parse(localStorage.entradas) || [];

  let dataSai: Array<any> = JSON.parse(localStorage.saidas) || [
    { quantia: "" },
  ];

  return (
    <section>
      <Estado estado={estadoAtual}></Estado>
      <Forma forma={forma} setForma={setForma}></Forma>
      <div className={styles.controlador}>
        <div className={styles.input__div}>
          <input
            type='number'
            onChange={(evento) => {
              setDadosInput(evento.target.value);
              console.log(estadoEntradas, estadoSaidas);
            }}
            className={styles.controlador__input}
          ></input>
          <button
            onClick={() => {
              setEstadoAtual(estadoEntradas - estadoSaidas)
              if (forma === 1) {
                setEstadoEntradas(estadoEntradas + Number(dadosInput))
                setEntradas([...entradas, { quantia: String(dadosInput) }]);
                window.localStorage.setItem(
                  "entradas",
                  JSON.stringify([...dataEnt, { quantia: Number(dadosInput) }])
                );
              } else {
                setEstadoSaidas(estadoSaidas + Number(dadosInput))
                totalSaidas += Number(dadosInput)
                setSaidas([...saidas, { quantia: String(dadosInput) }]);
                window.localStorage.setItem(
                  "saidas",
                  JSON.stringify([...dataSai, { quantia: Number(dadosInput) }])
                );
              }
            }}
            disabled={dadosInput === "" ? true : false}
            className={styles.controlador__botao}
          >
            Aplicar
          </button>
        </div>
        <ul className={styles.controlador__lista}>
          {dataEnt.map((valor, index) => {
            if (valor.quantia) {
              totalEntradas += Number(valor.quantia)
              return (
                <li
                  className={classNames({
                    [styles.lista__quantia]: true,
                    [styles.none]: forma !== 1 ? true : false,
                    [styles['lista__quantia--entrada']]: true
                  })}
                  key={index}
                >
                  R$ {Number(valor.quantia).toFixed(2)}
                </li>
              );
            }
          })}
          {dataSai.map((valor, index) => {
            if (valor.quantia) {
              totalSaidas += Number(valor.quantia)
              return (
                <li
                  className={classNames({
                    [styles.lista__quantia]: true,
                    [styles.none]: forma === 1 ? true : false,
                    [styles['lista__quantia--saida']]: true
                  })}
                  key={index}
                >
                  R$ {Number(valor.quantia).toFixed(2)}
                </li>
              );
            }
          })}
        </ul>
        <Resetar setEstadoEntradas={setEstadoEntradas} setEstadoSaidas={setEstadoSaidas} setEntradas={setEntradas} setSaidas={setSaidas}></Resetar>
      </div>
    </section>
  );
}
