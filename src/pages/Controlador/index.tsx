import { buildData } from "common/func/retornaData";
import moment from "moment";
import { useEffect, useState } from "react";
import styles from "./Controlador.module.scss";
import Criar from "./Criar";
import CriarBotao from "./CriarBotao";
import Estado from "./Estado";
import Forma from "./Forma";
import Resetar from "./Resetar";
import ValidacaoValor from "./ValidacaoValor";

interface Props {
  setDEntradas: React.Dispatch<React.SetStateAction<number>>;
  setDSaidas: React.Dispatch<React.SetStateAction<number>>;
  setDTotal: React.Dispatch<React.SetStateAction<number>>;
  setExtrato: React.Dispatch<React.SetStateAction<{
    quantia: string;
    categoria: string;
    data: string;
    negativo: boolean;
}[]>>
  extrato: {
    quantia: string;
    categoria: string;
    data: string;
    negativo: boolean
}[],
  forma: number,
  setForma: React.Dispatch<React.SetStateAction<number>>
}

export default function Controlador({
  setDEntradas,
  setDSaidas,
  setDTotal,
  setExtrato,
  forma,
  setForma,
  extrato
}: Props) {
  const [dadosInput, setDadosInput] = useState("");
  const [aparecer, setAparecer] = useState(false);
  const [dadosInputCategoria, setDadosInputCategoria] = useState("");
  const [aparecerCriar, setAparecerCriar] = useState(false)
  const [entradas, setEntradas] = useState([
    {
      quantia: "",
      categoria: "",
      data: ''
    },
  ]);
  const [saidas, setSaidas] = useState([
    {
      quantia: "",
      categoria: "",
      data: ''
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
    setExtrato,
    extrato,
    dadosInput,
    dadosInputCategoria
  ]);
  const classNames = require("classnames");
  let dataEnt: Array<any> = JSON.parse(localStorage.entradas) || [
    { quantia: "", categoria: "", data: '' },
  ];

  let dataSai: Array<any> = JSON.parse(localStorage.saidas) || [
    { quantia: "", categoria: "", data: '' },
  ];
  const [aparecerValidacao, setAparecerValidacao] = useState(false);
  const adiciona = () => {
    if (Number(dadosInput) >= 0 && dadosInputCategoria !== "") {
      setDadosInput("");
      setDadosInputCategoria("");
      setEstadoAtual(estadoEntradas - estadoSaidas);
      setDTotal(estadoAtual);
      if (forma === 1) {
        setExtrato([...extrato, {quantia: String(dadosInput), categoria: String(dadosInputCategoria), data: buildData(), negativo: false}])
        window.localStorage.setItem('extrato', JSON.stringify([...extrato, {quantia: String(dadosInput), categoria: String(dadosInputCategoria), data: buildData(), negativo: false}]))
        setEstadoEntradas(estadoEntradas + Number(dadosInput));
        setDEntradas(estadoEntradas);
        setEntradas([
          ...entradas,
          {
            quantia: String(dadosInput),
            categoria: String(dadosInputCategoria),
            data: buildData()
          },
        ]);
        window.localStorage.setItem(
          "entradas",
          JSON.stringify([
            ...dataEnt,
            {
              quantia: Number(dadosInput),
              categoria: String(dadosInputCategoria),
              data: buildData()
            },
          ])
        );
      } else {
        setExtrato([...extrato, {quantia: String(dadosInput), categoria: String(dadosInputCategoria), data: buildData(), negativo: true}])
        window.localStorage.setItem('extrato', JSON.stringify([...extrato, {quantia: String(dadosInput), categoria: String(dadosInputCategoria), data: buildData(), negativo: true}]))
        setEstadoSaidas(estadoSaidas + Number(dadosInput));
        setDSaidas(estadoSaidas);
        totalSaidas += Number(dadosInput);
        setSaidas([
          ...saidas,
          {
            quantia: String(dadosInput),
            categoria: String(dadosInputCategoria),
            data: buildData()
          },
        ]);
        window.localStorage.setItem(
          "saidas",
          JSON.stringify([
            ...dataSai,
            {
              quantia: Number(dadosInput),
              categoria: String(dadosInputCategoria),
              data: buildData()
            },
          ])
        );
      }
    } else {
      setAparecerValidacao(true);
    }
  }
  return (
    <section className={styles["section--controlador"]}>
      <ValidacaoValor
        setAparecerValidacao={setAparecerValidacao}
        aparecerValidacao={aparecerValidacao}
      ></ValidacaoValor>
      <Estado estado={estadoAtual}></Estado>
      <Forma forma={forma} setForma={setForma}></Forma>
      <Resetar
        setExtrato={setExtrato}
        aparecer={aparecer}
        setAparecer={setAparecer}
        setEstadoEntradas={setEstadoEntradas}
        setEstadoSaidas={setEstadoSaidas}
        setEntradas={setEntradas}
        setSaidas={setSaidas}
      ></Resetar>
      <CriarBotao aparecer={aparecer} setAparecerCriar={setAparecerCriar}/>
      <div className={styles.controlador}>
        <Criar setExtrato={setExtrato} aparecerCriar={aparecerCriar} setAparecerCriar={setAparecerCriar} adiciona={adiciona} setDadosInput={setDadosInput} dadosInput={dadosInput} aparecer={aparecer} setDadosInputCategoria={setDadosInputCategoria} dadosInputCategoria={dadosInputCategoria}></Criar>
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
