import classNames from "classnames";
import styles from "./ConfirmarReset.module.scss";

interface Props {
  setDeletar: React.Dispatch<React.SetStateAction<boolean>>;
  fechar: boolean;
  setFechar: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ConfirmarTransacao({
  setDeletar,
  fechar,
  setFechar,
}: Props) {
  return (
    <div
      className={classNames({
        [styles.popup__div]: true,
        [styles["popup__div--fechar"]]: fechar === true ? true : false,
      })}
    >
      <div className={styles.popup__content}>
        <div className={styles.content__paragraph}>
          Tem certeza que deseja resetar os dados da aplicação?
        </div>
        <div className={styles.popup__opcoes}>
          <button
            onClick={() => setFechar(true)}
            className={styles.opcoes__nao}
          >
            Não
          </button>
          <button
            onClick={() => {
              setDeletar(true);
              setFechar(true);
            }}
            className={styles.opcoes__sim}
          >
            Sim
          </button>
        </div>
      </div>
    </div>
  );
}
