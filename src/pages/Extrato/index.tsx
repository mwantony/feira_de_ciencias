import styles from "./Extrato.module.scss";
import React, { useEffect, useState } from "react";
import qrcode from 'assets/img/qr_download.png';

interface Props {
  extrato: Array<any>
  forma: number
}

export default function Extrato({extrato, forma}: Props) {

  if(!localStorage.extrato) {
    localStorage.extrato = JSON.stringify(extrato)
  }
  let dataExt: Array<any> = JSON.parse(localStorage.extrato) || [
    { quantia: "", categoria: "", data: '' },
  ];

  return (
    <section className={styles.aplicativo}>
      <ul onClick={() => console.log(extrato)}>
        {dataExt.map((operacao, index) => {
          if(operacao.quantia !== '') {
            return(
              <li key={index}>
                <div>{operacao.data}</div>
                <div>{operacao.categoria}</div>
                <div>{operacao.quantia}</div>
              </li>
            )
          }
        })}
      </ul>
    </section>
  );
}
