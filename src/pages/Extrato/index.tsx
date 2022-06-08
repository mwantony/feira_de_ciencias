import styles from "./Extrato.module.scss";
import React from "react";
import qrcode from 'assets/img/qr_download.png'
export default function Extrato() {
  let dataEnt: Array<any> = JSON.parse(localStorage.entradas) || [
    { quantia: "", categoria: "" },
  ]
  return (
    <section className={styles.aplicativo}>

    </section>
  );
}
