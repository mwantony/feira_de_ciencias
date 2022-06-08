import AddIcon from '@mui/icons-material/Add';
import styles from './CriarBotao.module.scss'
export default function CriarBotao({setAparecerCriar}: {setAparecerCriar: React.Dispatch<React.SetStateAction<boolean>>}) {
  return(
    <div className={styles.botao} onClick={() => setAparecerCriar(true)}>
      <AddIcon sx={{fontSize: 30}}></AddIcon>
    </div>
  )
}