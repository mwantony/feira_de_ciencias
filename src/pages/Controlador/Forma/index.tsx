import styles from "./Forma.module.scss";

interface Props {
  forma: number;
  setForma: React.Dispatch<React.SetStateAction<number>>;
}

export default function Forma({ forma, setForma }: Props) {
  const formas = [
    {
      label: "Entradas",
      to: "/entradas",
      class: "entradas",
    },
    {
      label: "Saídas",
      to: "/saidas",
      class: "saidas",
    },
  ];
  const classNames = require("classnames");
  return (
    <div className={styles.aba}>
      <ul className={styles.aba__lista}>
        {formas.map((item, index) => (
          <li
            key={index}
            onClick={() => {
              if (item.class === "entradas") {
                setForma(1);
              } else {
                setForma(2);
              }
            }}
            className={classNames({
              [styles.aba__forma]: true,
              [styles[`aba__forma--${item.class}`]]: true,
              [styles[`aba__forma--ativo-entrada`]]:
                forma === index + 1 && item.class === "entradas" ? true : "",
              [styles[`aba__forma--ativo-saida`]]:
                forma === index + 1 && item.class === "saidas" ? true : "",
            })}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
