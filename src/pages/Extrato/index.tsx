import styles from "./Extrato.module.scss";
import React, { useEffect, useState } from "react";
import qrcode from 'assets/img/qr_download.png';

interface Props {
  extrato: Array<any>
}

export default function Extrato({extrato}: Props) {

  return (
    <section className={styles.aplicativo}>
      <ul onClick={() => console.log(extrato)}>sf
      </ul>
    </section>
  );
}
