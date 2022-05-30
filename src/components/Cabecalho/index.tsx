import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Cabecalho.module.scss";

export default function Cabecalho() {
  const classNames = require("classnames");
  const [selecionado, setSelecionado] = useState(0)
  const menu = [
    {
      label: "Controlador",
      to: "/",
    },
    {
      label: "Calculadora",
      to: "/calculadora",
    },
    {
      label: "Extrato",
      to: "/extrato",
    },
  ];
  return (
    <header className={styles.cabecalho}>
      <nav className={styles.navegacao}>
        <ul className={styles.navegacao__lista}>
          {menu.map((link, index) => (
            <Link className={styles.navegacao__componente} to={link.to}>
              <li onClick={() => {
                setSelecionado(index)
              }}
                className={classNames({
                  [styles.navegacao__link]: true,
                  [styles["navegacao__link--selecionado"]]: selecionado === index ? true : false
                })}
              >
                {link.label}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
}
