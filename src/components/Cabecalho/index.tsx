import styles from './Cabecalho.module.scss'

export default function Cabecalho() {
  const menu = [
    'Controlador',
    'Calculadora',
    'Extrato'
  ]
  return(
    <header className={styles.cabecalho}>
      <nav>
        <ul>
          {menu.map((link, index) => (
            <li className="">{link}</li>
          ))}
        </ul>
      </nav>
    </header>
  )
}