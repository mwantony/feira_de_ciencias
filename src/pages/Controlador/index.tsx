import { useEffect, useState } from 'react'
import Input from '@mui/material/Input';
import styles from './Controlador.module.scss'
import Forma from './Forma'
import { Button, TextField } from '@mui/material';
export default function Controlador() {
  const [entradas, setEntradas] = useState([
    {
      "quantia": 230
    }
  ])
  const [saidas, setSaidas] = useState([
    {
      "quantia": 120
    }
  ])
  const [selecionado, setSelecionado] = useState(entradas)
  const [forma, setForma] = useState(1)
  const classNames = require('classnames')

  useEffect(() => {
    if(forma === 1) {
      setSelecionado([...entradas])
    } else {
      setSelecionado([...saidas])
    }
  }, [forma, entradas, saidas]) 
  return(
    <section>
      <Forma forma={forma} setForma={setForma}></Forma>
      <div className={styles.controlador}>
        <div className={styles.input__div}>
          <input placeholder="Valor"className={styles.controlador__input}></input>
          <button className={styles.controlador__botao}>Aplicar</button>
        </div>
        <ul className={styles.controlador__lista}>
          {selecionado.map((valor, index) => (
            <li className={styles.lista__quantia} key={index}>{valor.quantia}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}