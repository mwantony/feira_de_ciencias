import classNames from "classnames";
import styles from "./Carteira.module.scss";
interface Props {
  entradas: number;
  saidas: number;
  total: number;
}

export default function Carteira({ entradas, saidas, total }: Props) {
  return (
    <section className="carteira">
      <div className={styles.carteira__div}>
        <p
          className={classNames({
            [styles["carteira__entradas"]]: true,
            [styles["carteira__opcao"]]: true,
            [styles["carteira__desk"]]: true,
          })}
        >
          Total de entradas:{" "}
        </p>
        <p
          className={classNames({
            [styles["carteira__saidas"]]: true,
            [styles["carteira__opcao"]]: true,
            [styles["carteira__mobile"]]: true,
          })}
        >
          Entradas:
        </p>
        <p
          className={classNames({
            [styles["carteira__entradas--currency"]]: true,
            [styles.positivo]: true,
          })}
        >
          R$ {entradas.toFixed(2)}
        </p>
      </div>
      <div className={styles.carteira__div}>
        <p
          className={classNames({
            [styles["carteira__saidas"]]: true,
            [styles["carteira__opcao"]]: true,
            [styles["carteira__desk"]]: true,
          })}
        >
          Total de saídas:
        </p>
        <p
          className={classNames({
            [styles["carteira__saidas"]]: true,
            [styles["carteira__opcao"]]: true,
            [styles["carteira__mobile"]]: true,
          })}
        >
          Saídas:
        </p>
        <p
          className={classNames({
            [styles["carteira__saidas--currency"]]: true,
            [styles.negativo]: true,
          })}
        >
          R$ -{saidas.toFixed(2)}
        </p>
      </div>
      <div className={styles["carteira__div--lucro"]}>
        <p
          className={classNames({
            [styles["carteira__total"]]: true,
          })}
        >
          Lucro ou diferença:
        </p>
        <p
          className={classNames({
            [styles.carteira__total]: true,
            [styles.positivo]: total > 0 || total === 0 ? true : false,
            [styles.negativo]: total < 0 ? true : false,
          })}
        >
          R$ {total.toFixed(2)}
        </p>
      </div>
    </section>
  );
}
