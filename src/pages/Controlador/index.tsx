import { useEffect, useState } from "react";
import styles from "./Controlador.module.scss";
import Estado from "./Estado";
import Forma from "./Forma";
import Resetar from "./Resetar";
import ValidacaoValor from "./ValidacaoValor";
import NumberFormat from 'react-number-format'

interface Props {
  setDEntradas: React.Dispatch<React.SetStateAction<number>>;
  setDSaidas: React.Dispatch<React.SetStateAction<number>>;
  setDTotal: React.Dispatch<React.SetStateAction<number>>;
}

export default function Controlador({
  setDEntradas,
  setDSaidas,
  setDTotal,
}: Props) {
  const [dadosInput, setDadosInput] = useState("");
  const [aparecer, setAparecer] = useState(false);
  const [dadosInputCategoria, setDadosInputCategoria] = useState("");
  const [entradas, setEntradas] = useState([
    {
      quantia: "",
      categoria: "",
    },
  ]);
  const [saidas, setSaidas] = useState([
    {
      quantia: "",
      categoria: "",
    },
  ]);
  if (!localStorage.entradas) {
    localStorage.entradas = JSON.stringify(entradas);
  }
  if (!localStorage.saidas) {
    localStorage.saidas = JSON.stringify(saidas);
  }
  let totalEntradas = 0;
  const [estadoEntradas, setEstadoEntradas] = useState(totalEntradas);
  let totalSaidas = 0;
  const [estadoSaidas, setEstadoSaidas] = useState(totalSaidas);
  const [selecionado, setSelecionado] = useState(entradas);
  const [forma, setForma] = useState(1);
  const [estadoAtual, setEstadoAtual] = useState(estadoEntradas - estadoSaidas);
  useEffect(() => {
    setEstadoAtual(estadoEntradas - estadoSaidas);
    setDTotal(estadoAtual);
    if (totalEntradas !== totalEntradas - 1) {
      setEstadoEntradas(totalEntradas);
      setDEntradas(estadoEntradas);
      setEstadoAtual(estadoEntradas - estadoSaidas);
      setDTotal(estadoAtual);
    }
    if (totalSaidas !== totalSaidas - 1) {
      setEstadoSaidas(totalSaidas);
      setDSaidas(estadoSaidas);
      setEstadoAtual(estadoEntradas - estadoSaidas);
      setDTotal(estadoAtual);
    }
    if (forma === 1) {
      setSelecionado([...entradas]);
    } else {
      setSelecionado([...saidas]);
    }
  }, [
    forma,
    entradas,
    saidas,
    totalEntradas,
    totalSaidas,
    estadoEntradas,
    estadoSaidas,
    setDTotal,
    estadoAtual,
    setDEntradas,
    setDSaidas,
  ]);
  const classNames = require("classnames");
  let dataEnt: Array<any> = JSON.parse(localStorage.entradas) || [
    { quantia: "", categoria: "" },
  ];

  let dataSai: Array<any> = JSON.parse(localStorage.saidas) || [
    { quantia: "", categoria: "" },
  ];
  const [aparecerValidacao, setAparecerValidacao] = useState(false);
  return (
    <section>
      <ValidacaoValor
        setAparecerValidacao={setAparecerValidacao}
        aparecerValidacao={aparecerValidacao}
      ></ValidacaoValor>
      <Estado estado={estadoAtual}></Estado>
      <Forma forma={forma} setForma={setForma}></Forma>
      <Resetar
        aparecer={aparecer}
        setAparecer={setAparecer}
        setEstadoEntradas={setEstadoEntradas}
        setEstadoSaidas={setEstadoSaidas}
        setEntradas={setEntradas}
        setSaidas={setSaidas}
      ></Resetar>
      <div className={styles.controlador}>
        <div className={styles.input__div}>
          <div className={styles.inputs}>
            <div>
              <label id="label-valor" className={styles.label} htmlFor="valor">
                Valor: R$
              </label>
              <NumberFormat
                id="valor"
                min={0}
                prefix='R$'
                thousandSeparator={true}
                onChange={(evento: any) => {
                  setDadosInput(evento.target.value);
                  console.log(estadoEntradas, estadoSaidas);
                }}
                className={styles.controlador__input}
                value={dadosInput}
                maxLength={7}
              ></NumberFormat>
            </div>
            <div>
              <label
                id="label-categoria"
                className={styles.label}
                htmlFor="categoria"
              >
                Categoria:
              </label>
              <input
                id="categoria"
                onChange={(evento) => {
                  setDadosInputCategoria(evento.target.value);
                }}
                maxLength={20}
                type="text"
                className={styles.controlador__input}
                value={dadosInputCategoria}
              />
            </div>
          </div>
          <button
            onClick={() => {
              if (Number(dadosInput) >= 0 && dadosInputCategoria !== "") {
                console.log("ok");
                setDadosInput("");
                setDadosInputCategoria("");
                setEstadoAtual(estadoEntradas - estadoSaidas);
                setDTotal(estadoAtual);
                if (forma === 1) {
                  setEstadoEntradas(estadoEntradas + Number(dadosInput));
                  setDEntradas(estadoEntradas);
                  setEntradas([
                    ...entradas,
                    {
                      quantia: String(dadosInput),
                      categoria: String(dadosInputCategoria),
                    },
                  ]);
                  window.localStorage.setItem(
                    "entradas",
                    JSON.stringify([
                      ...dataEnt,
                      {
                        quantia: Number(dadosInput),
                        categoria: String(dadosInputCategoria),
                      },
                    ])
                  );
                } else {
                  setEstadoSaidas(estadoSaidas + Number(dadosInput));
                  setDSaidas(estadoSaidas);
                  totalSaidas += Number(dadosInput);
                  setSaidas([
                    ...saidas,
                    {
                      quantia: String(dadosInput),
                      categoria: String(dadosInputCategoria),
                    },
                  ]);
                  window.localStorage.setItem(
                    "saidas",
                    JSON.stringify([
                      ...dataSai,
                      {
                        quantia: Number(dadosInput),
                        categoria: String(dadosInputCategoria),
                      },
                    ])
                  );
                }
              } else {
                setAparecerValidacao(true);
              }
            }}
            disabled={
              dadosInput === "" || dadosInputCategoria === "" ? true : false
            }
            className={classNames({
              [styles.controlador__botao]: true,
              [styles['controlador__botao--popupon']]: aparecer === true ? true : false
            })}
          >
            Aplicar
          </button>
        </div>
        <ul className={styles.lista}>
          {dataEnt.map((valor, index) => {
            if (valor.quantia) {
              totalEntradas += Number(valor.quantia);
              return (
                <li
                  className={classNames({
                    [styles.lista__quantia]: true,
                    [styles.none]: forma !== 1 ? true : false,
                    [styles["lista__quantia--entrada"]]: true,
                  })}
                  key={index}
                >
                  <p className={styles.categoria}>{valor.categoria}</p>
                  <div className={styles.valor}>
                    R$ {Number(valor.quantia).toFixed(2)}
                  </div>
                </li>
              );
            }
          })}
          {dataSai.map((valor, index) => {
            if (valor.quantia) {
              totalSaidas += Number(valor.quantia);
              return (
                <li
                  className={classNames({
                    [styles.lista__quantia]: true,
                    [styles.none]: forma === 1 ? true : false,
                    [styles["lista__quantia--saida"]]: true,
                  })}
                  key={index}
                >
                  <p className={styles.categoria}>{valor.categoria}</p>
                  <div className={styles.valor}>
                    R$ -{Number(valor.quantia).toFixed(2)}
                  </div>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </section>
  );
}
