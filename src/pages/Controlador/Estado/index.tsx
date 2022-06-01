import classNames from 'classnames'
import styles from './Estado.module.scss'

export default function Estado({estado}: {estado: number}) {
  return(
    <div className={styles.estado}>
      <h2 className={classNames({
        [styles.controlador__saldo]: true,
        [styles['controlador__saldo--positivo']]: estado > 0 || estado === 0? true : false,
        [styles['controlador__saldo--negativo']]: estado < 0 ? true : false
      })}>R$ {estado.toFixed(2)}</h2>
    </div>
  )
}