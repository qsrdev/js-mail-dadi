const colori = ["rosso", "blu", "rosso", "verde", "rosso"];
let numeroRossi = 0;

for (let i = 0; i < colori.length; i++) {
  console.log(colori[i]);

  if (colori[i].includes("rosso")) {
    numeroRossi++;
  }
}

console.log(numeroRossi);
