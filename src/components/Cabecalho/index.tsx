import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Cabecalho.module.scss";
import { MenuSharp } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";

interface Props {
  selecionado: number;
  setSelecionado: React.Dispatch<React.SetStateAction<number>>;
}

export default function Cabecalho({ selecionado, setSelecionado }: Props) {
  const [abrir, setAbrir] = useState(false);
  const classNames = require("classnames");

  const menu = [
    {
      label: "Controlador",
      to: "/controlador/",
    },
    {
      label: "Carteira",
      to: "/carteira/",
    },
    {
      label: "Extrato",
      to: "/extrato/",
    },
  ];

  return (
    <>
    <div onClick={() => setAbrir(false)} className={classNames({
      [styles.escuro]: true,
      [styles['escuro--aparecer']]: abrir === true ? true : false
    })}></div>
    <header className={styles.cabecalho}>
      <nav className={styles.navegacao}>
        <ul
          className={classNames({
            [styles.navegacao__lista]: true,
            [styles["navegacao__lista--ativo"]]: abrir === true ? true : "",
          })}
        >
          {menu.map((link, index) => (
            <Link
              key={index}
              className={styles.navegacao__componente}
              to={link.to}
            >
              <li
                onClick={() => {
                  setSelecionado(index);
                  setAbrir(false);
                }}
                className={classNames({
                  [styles.navegacao__link]: true,
                  [styles["navegacao__link--selecionado"]]:
                    selecionado === index ? true : false,
                })}
              >
                {link.label}
              </li>
            </Link>
          ))}
          <CloseIcon
            onClick={() => setAbrir(false)}
            sx={{ fontSize: 30 }}
            className={styles.lista__close}
          ></CloseIcon>
        </ul>
      </nav>
      <MenuSharp
        onClick={() => {
          setAbrir(true);
        }}
        sx={{ fontSize: 37 }}
        className={styles.cabecalho__hamburguer}
      ></MenuSharp>
    </header>
    </>
  );
}
