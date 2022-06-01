interface Props {
  setEntradas: React.Dispatch<
    React.SetStateAction<
      {
        quantia: string;
      }[]
    >
  >;
  setSaidas: React.Dispatch<
    React.SetStateAction<
      {
        quantia: string;
      }[]
    >
  >;
}

export default function Resetar({ setEntradas, setSaidas }: Props) {
  return (
    <button
      onClick={() => {
        setEntradas([{"quantia": ''}])
        setSaidas([{"quantia": ''}])
        window.localStorage.removeItem("entradas");
        window.localStorage.removeItem("saidas");
      }}
    >
      Resetar
    </button>
  );
}
