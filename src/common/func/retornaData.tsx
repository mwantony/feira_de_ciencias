export function buildData() {
  let data = new Date()
  let dia  = data.getDate().toString().padStart(2, '0')
  let mes  = (data.getMonth()+1).toString().padStart(2, '0')
  let ano  = data.getFullYear();
  let hora = data.getHours()
  let minutos = data.getMinutes()
  return `${dia}/${mes}/${ano} ${hora}:${minutos}`;
}

