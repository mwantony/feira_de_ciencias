export function setEnt({entradas}: {entradas: Array<Object>}) {
  const entries = window.localStorage.setItem('entradas', entradas.toString())
}

export function getEnt() {
  const dados = window.localStorage.getItem('entradas') || []
  return console.log(dados)
}

export function setSai({saidas}:  {saidas: any}) {
  const outting = window.localStorage.setItem('saidas', saidas.toString()) 
}

export function getSai() {
  const dados = window.localStorage.getItem('saidas') || []
  return console.log(dados)
}