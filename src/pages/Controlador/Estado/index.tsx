import classNames from "classnames";
import { useState } from "react";
import styles from "./Estado.module.scss";
import ZoomIn from "./ZoomIn";

export default function Estado({ estado }: { estado: number }) {
  const [saldoAparecer, setSaldoAparecer] = useState(false);
  return (
    <>
      <ZoomIn
        estado={estado}
        saldoAparecer={saldoAparecer}
        setSaldoAparecer={setSaldoAparecer}
      ></ZoomIn>
      <div
        onClick={() => {
          setSaldoAparecer(true);
        }}
        className={styles.estado}
      >
        <h2
          className={classNames({
            [styles.controlador__saldo]: true,
            [styles["controlador__saldo--positivo"]]:
              estado > 0 || estado === 0 ? true : false,
            [styles["controlador__saldo--negativo"]]: estado < 0 ? true : false,
          })}
        >
          R$ {estado.toFixed(2)}
        </h2>
      </div>
    </>
  );
}
