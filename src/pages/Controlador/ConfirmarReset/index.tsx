import classNames from "classnames";
import styles from "./ConfirmarReset.module.scss";

interface Props {
  setDeletar: React.Dispatch<React.SetStateAction<boolean>>;
  aparecer: boolean;
  setAparecer: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ConfirmarReset({
  setDeletar,
  aparecer,
  setAparecer,
}: Props) {
  return (
    <div
      onClick={() => setAparecer(false)}
      className={classNames({
        [styles.popup]: true,
        [styles["popup--aparecer"]]: aparecer === true ? true : false,
      })}
    >
      <div
        className={classNames({
          [styles.popup__content]: true,
          [styles["popup__content--aparecer"]]:
            aparecer === true ? true : false,
        })}
      >
        <div
          className={classNames({
            [styles.content__paragraph]: true,
            [styles["content__paragraph--aparecer"]]:
              aparecer === true ? true : false,
          })}
        >
          Tem certeza que deseja resetar os dados da aplicação?
        </div>
        <div
          className={classNames({
            [styles.popup__opcoes]: true,
            [styles["popup__opcoes--aparecer"]]:
              aparecer === true ? true : false,
          })}
        >
          <button
            onClick={() => setAparecer(false)}
            className={classNames({
              [styles.opcoes__nao]: true,
              [styles["opcoes__nao--aparecer"]]:
                aparecer === true ? true : false,
            })}
          >
            Não
          </button>
          <button
            onClick={() => {
              setDeletar(true);
              setAparecer(false);
            }}
            className={classNames({
              [styles.opcoes__sim]: true,
              [styles["opcoes__sim--aparecer"]]:
                aparecer === true ? true : false,
            })}
          >
            Sim
          </button>
        </div>
      </div>
    </div>
  );
}
