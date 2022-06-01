import { useEffect, useState } from "react";
import { getEnt, setEnt, setSai } from "data/localStorage";
import Input from "@mui/material/Input";
import styles from "./Controlador.module.scss";
import DeleteIcon from "@mui/icons-material/Delete";
import Forma from "./Forma";
import { Button, TextField } from "@mui/material";
import { stringify } from "querystring";
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

  const [selecionado, setSelecionado] = useState(entradas);
  const [forma, setForma] = useState(1);
  useEffect(() => {
    if (forma === 1) {
      setSelecionado([...entradas]);
    } else {
      setSelecionado([...saidas]);
    }
  }, [forma, entradas, saidas]);
  const classNames = require("classnames");
    let dataEnt: Array<any> = JSON.parse(localStorage.entradas) || [

  ];

  /*let [dataEnt, setDataEnt] = useState();*/
  let dataSai: Array<any> = JSON.parse(localStorage.saidas) || [
    { quantia: "" },
  ];

  return (
    <section>
      <Forma forma={forma} setForma={setForma}></Forma>
      <div className={styles.controlador}>
        <div className={styles.input__div}>
          <input
            onChange={(evento) => {
              setDadosInput(evento.target.value);
            }}
            placeholder="Valor"
            className={styles.controlador__input}
          ></input>
          <button
            onClick={() => {
              if (forma === 1) {
                setEntradas([...entradas, { quantia: String(dadosInput) }]);
                window.localStorage.setItem(
                  "entradas",
                  JSON.stringify([...dataEnt, { quantia: Number(dadosInput) }])
                );
              } else {
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
              return (
                <li
                  className={classNames({
                    [styles.lista__quantia]: true,
                    [styles.none]: forma !== 1 ? true : false,
                  })}
                  key={index}
                >
                  {valor.quantia}
                  <DeleteIcon
                    onClick={(evento) => {
                      window.localStorage.removeItem("entradas");
                      dataEnt = dataEnt.splice(index, 1);
                      console.log(dataEnt);
                    }}
                  ></DeleteIcon>
                </li>
              );
            }
          })}
          {dataSai.map((valor, index) => {
            if (valor.quantia) {
              return (
                <li
                  className={classNames({
                    [styles.lista__quantia]: true,
                    [styles.none]: forma === 1 ? true : false,
                  })}
                  key={index}
                >
                  {valor.quantia}
                  <button
                    onClick={() => {
                      dataSai.splice(index, 1);
                      console.log(dataSai);
                    }}
                  ></button>
                </li>
              );
            }
          })}
        </ul>
        <Resetar setEntradas={setEntradas} setSaidas={setSaidas}></Resetar>
      </div>
    </section>
  );
}
