import classNames from 'classnames';
import styles from './Criar.module.scss'

interface Props {
  aparecerCriar: boolean,
  setAparecerCriar: React.Dispatch<React.SetStateAction<boolean>>,
  adiciona: () => void,
  setDadosInput: React.Dispatch<React.SetStateAction<string>>,
  dadosInput: string,
  setDadosInputCategoria: React.Dispatch<React.SetStateAction<string>>,
  dadosInputCategoria: string,
  aparecer: boolean,
  setExtrato: React.Dispatch<React.SetStateAction<{
    quantia: string;
    categoria: string;
    data: string;
    negativo: boolean;
}[]>>
}

export default function Criar({
  adiciona,
  setDadosInput,
  dadosInput,
  setDadosInputCategoria,
  dadosInputCategoria,
  aparecer,
  aparecerCriar,
  setAparecerCriar,
  setExtrato
}: Props) {
  return(
    <>
    <div className={classNames({
      [styles['popup']]: true,
      [styles['popup--aparecer']]: aparecerCriar === true ? true : false
    })} onClick={() => setAparecerCriar(false)}></div>
    <div className={classNames({
      [styles['input__div']]: true,
      [styles['input__div--aparecer']]: aparecerCriar === true ? true : false
    })}>
          <div className={styles.inputs}>
            <div>
              <label id="label-valor" className={styles.label} htmlFor="valor">
                Valor: R$
              </label>
              <input
                id="valor"
                min={0}
                type="text"
                onChange={(evento: any) => {
                  setDadosInput(evento.target.value);
                }}
                className={styles.controlador__input}
                value={dadosInput}
                maxLength={5}
              ></input>
            </div>
            <div>
              <label
                id="label-categoria"
                className={styles.label}
                htmlFor="categoria"
              >
                Categoria:
              </label>
              <input
                id="categoria"
                onChange={(evento) => {
                  setDadosInputCategoria(evento.target.value);
                }}
                maxLength={20}
                type="text"
                className={styles.controlador__input}
                value={dadosInputCategoria}
              />
            </div>
          </div>
          <button
            onClick={() => {
              adiciona()
              setAparecerCriar(false)
            }}
            disabled={
              dadosInput === "" || dadosInputCategoria === "" ? true : false
            }
            className={classNames({
              [styles.controlador__botao]: true,
              [styles['controlador__botao--popupon']]: aparecer === true ? true : false
            })}
          >
            Aplicar
          </button>
        </div>
        </>
  )
}