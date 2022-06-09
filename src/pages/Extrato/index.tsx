import styles from "./Extrato.module.scss";
import React, { useEffect, useState } from "react";
import qrcode from 'assets/img/qr_download.png';
import classNames from "classnames";

interface Props {
  extrato: Array<any>
  forma: number,
  dataExt: Array<any>
}

export default function Extrato({extrato, forma, dataExt}: Props) {

  if(!localStorage.extrato) {
    localStorage.extrato = JSON.stringify(extrato)
  }
  function ordemCrescente(a: any, b: any) {
    return a.data > b.data
  }

  return (
    <section className={styles.aplicativo}>
      <ul className={styles.lista} onClick={() => console.log(extrato)}>
        {dataExt.map((operacao, index) => {
          if(operacao.quantia !== '') {
            return(
              <li className={styles.lista__content} key={index}>
                <p className={styles.lista__data}>{operacao.data}</p>
                <p className={styles.lista__categoria}>{operacao.categoria}</p>
                <p className={classNames({
                  [styles.lista__quantia]: true,
                  [styles['lista__quantia--positivo']]: operacao.negativo !== true ? true : false, 
                  [styles['lista__quantia--negativo']]: operacao.negativo === true ? true : false 
                })}>R$ {operacao.negativo === true ? '-' : ''}{Number(operacao.quantia).toFixed(2)}</p>
              </li>
            ) 
          }
        })}
      </ul>
    </section>
  );
}
