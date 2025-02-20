const numbcas = function () {
  return Math.floor(Math.random() * 90) + 1
}

const numestratti = function () {
  const numero = numbcas()
  const tavolo = document.getElementById("NumeriEstratti")
  const n = document.createElement("p")
  n.innerText = numero
  tavolo.appendChild(n)
  const p = document.querySelectorAll("h3")
  if (p === n) {
    p.classList.add("segno")
  }
}

const tabellone = function () {
  for (let i = 1; i < 91; i++) {
    const cell = document.createElement("div")
    const cellValue = document.createElement("h3")
    cellValue.innerText = i
    cell.appendChild(cellValue)
    const tombola = document.getElementById("Tombola")
    tombola.appendChild(cell)
  }
}
tabellone()
