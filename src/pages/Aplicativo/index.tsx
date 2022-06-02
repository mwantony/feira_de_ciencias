import styles from './Aplicativo.module.scss'

export default function Aplicativo() {
  return(
    <section className={styles.aplicativo}>
      <div className={styles.aplicativo__donwloads}>
        <h2 className={styles.downloads}>Área de downloads</h2>
        <div className={styles.download__app}>
          <h2 className={styles.app__titulo}>Baixe o app! :{')'}</h2>
          <button className={styles.baixar__app}>Baixar</button>
        </div>
        <div className={styles.download__planilha}>
          <h2 className={styles.planilha__titulo}>Download da planilha:</h2>
          <button className={styles.baixar__planilha}>Download</button>
        </div>
      </div>
      <div className={styles.aplicativo__porqueusar}>
        <h2 className={styles.porqueusar__titulo}>Por que utilizar nossas ferramentas?</h2>
        <p className={styles.porqueusar__paragraph}>Tenha o controlador sempre em mãos com o nosso aplicativo :{']'}</p>
        <p className={styles.porqueusar__paragraph}>Caso queira ter um controle maior sobre o seu dinheiro, baixe nossa planilha!</p>
      </div>
    </section>
  )
}