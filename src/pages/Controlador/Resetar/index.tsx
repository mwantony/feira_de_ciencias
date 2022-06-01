import styles from './Resetar.module.scss'

interface Props {
  setEntradas: React.Dispatch<
    React.SetStateAction<
      {
        quantia: string;
      }[]
    >
  >;
  setSaidas: React.Dispatch<
    React.SetStateAction<
      {
        quantia: string;
      }[]
    >
  >;
  setEstadoEntradas: React.Dispatch<React.SetStateAction<number>>
  setEstadoSaidas: React.Dispatch<React.SetStateAction<number>>
}

const classNames = require('classnames')

export default function Resetar({ setEntradas, setSaidas, setEstadoEntradas, setEstadoSaidas }: Props) {
  return (
    <div className={styles.resetar}>
    <button className={classNames({
      [styles.resetar__button]: true
    })}
      onClick={() => {
        setEstadoEntradas(0)
        setEstadoSaidas(0)
        setEntradas([{"quantia": ''}])
        setSaidas([{"quantia": ''}])
        window.localStorage.removeItem("entradas");
        window.localStorage.removeItem("saidas");
      }}
    >
      Resetar
    </button>
    </div>
  );
}
