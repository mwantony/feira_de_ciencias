import React from 'react';
import {ReactComponent as Logo1} from 'assets/svgs/nuvem1.svg'
import {ReactComponent as Logo2} from 'assets/svgs/nuvem2.svg'
import {ReactComponent as Logo3} from 'assets/svgs/nuvem3.svg'
import styles from './NotFound.module.scss';
import { Link } from 'react-router-dom';

interface Props {
  setSelecionado: React.Dispatch<React.SetStateAction<number>>,
}

export default function NotFound({setSelecionado}: Props) {
  return (
    <section className={styles.notfound}>
      <Logo1 className={styles.notfound__nuvem1}/>
      <Logo2 className={styles.notfound__nuvem2}></Logo2>
      <Logo3 className={styles.notfound__nuvem3}></Logo3>
      <h2 className={styles.notfound__oops}>Oops...</h2>
      <h3 className={styles.notfound__titulo}>Não encontramos nada aqui!</h3>
      <p className={styles.notfound__paragraph}>Que tal ir para a página inicial?</p>
      <Link className={styles.notfound__link} to='/'><button onClick={() => {
        setSelecionado(0)
      }} className={styles.notfound__button}>Início</button></Link>
    </section>
  );
}
