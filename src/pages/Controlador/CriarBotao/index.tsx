import AddIcon from '@mui/icons-material/Add';
import classNames from 'classnames';
import styles from './CriarBotao.module.scss'
export default function CriarBotao({setAparecerCriar, aparecer}: {aparecer: boolean, setAparecerCriar: React.Dispatch<React.SetStateAction<boolean>>}) {
  return(
    <div className={classNames({
      [styles.botao]: true,
      [styles['botao--zindex']]: aparecer === true ? true : false
    })} onClick={() => setAparecerCriar(true)}>
      <AddIcon sx={{fontSize: 30}}></AddIcon>
    </div>
  )
}