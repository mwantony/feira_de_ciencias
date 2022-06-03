import classNames from "classnames";
import styles from "./ValidacaoValor.module.scss";

interface Props {
  aparecerValidacao: boolean;
  setAparecerValidacao: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ValidacaoValor({
  aparecerValidacao,
  setAparecerValidacao,
}: Props) {
  return (
    <div
      onClick={() => setAparecerValidacao(false)}
      className={classNames({
        [styles.popup__div]: true,
        [styles["popup__div--aparecer"]]: aparecerValidacao === true ? true : false,
      })}
    >
      <div className={classNames({
        [styles.popup__content]: true,
        [styles['popup__content--aparecer']]: aparecerValidacao === true ? true : false
      })}>
        <div className={classNames({
          [styles.content__paragraph]: true,
          [styles['content__paragraph--aparecer']]: aparecerValidacao === true ? true : false
        })}>
          O valor da operação deve ser um número positivo!
        </div>
        <div className={classNames({
          [styles.popup__opcoes]: true,
          [styles['popup__opcoes--aparecer']]: aparecerValidacao === true ? true : false
        })}>

          <button
            onClick={() => {
              setAparecerValidacao(false);
            }}
            className={classNames({
              [styles.opcoes__sim]: true,
              [styles['opcoes__sim--aparecer']]: aparecerValidacao === true ? true : false
            })}
          >
            Ok
          </button>
        </div>
      </div>
    </div>
  );
}
