import { Link } from 'react-router-dom'
import styles from './Controlador.module.scss'
export default function Controlador() {
  const classNames = require('classnames')
  const formas = [
    {
      "label": "Entradas",
      "to": "/entradas",
      "class": "entradas"
    },
    {
      "label": "Saidas",
      "to": '/saidas',
      "class": "saidas"
    }
  ]
  return(
    <section className={styles.controlador}>
      <div className={styles.aba}>
        <ul className={styles.aba__lista}>
          {formas.map((forma, index) => (
            <Link className={classNames({
              [styles.aba__forma]: true,
              [styles[`aba__forma--${forma.class}`]]: true
            })} key={index} to={forma.to}><li>{forma.label}</li></Link>
          ))}
        </ul>
      </div>
      <input type="text"/>
    </section>
  )
}