import classNames from "classnames";
import styles from "./ZoomIn.module.scss";

interface Props {
  estado: number;
  saldoAparecer: boolean;
  setSaldoAparecer: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ZoomIn({
  estado,
  saldoAparecer,
  setSaldoAparecer,
}: Props) {
  return (
    <>
      <div onClick={() => {
        setSaldoAparecer(false)
      }} className={classNames({
        [styles.zoomin]: true,
        [styles['zoomin--aparecer']]: saldoAparecer === true ? true : false
      })}></div>
      <div
        className={classNames({
          [styles["popupzoom"]]: true ,

          [styles["popupzoom--aparecer"]]:
            saldoAparecer === true ? true : false,

        })}
      >
        <p className={classNames({
          [styles['popupzoom__positivo']]: estado >= 0 ? true : false,
          [styles['popupzoom__negativo']]: estado < 0 ? true : false,
        })}>R$ {estado.toFixed(2)}</p>
      </div>
    </>
  );
}
