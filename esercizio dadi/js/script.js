const sides = 6;

let rollPlayer = Math.floor(Math.random() * sides) + 1;
console.log("Il risultato del giocatore 1 è " + rollPlayer);

let rollComputer = Math.floor(Math.random() * sides) + 1;
console.log("Il risultato del computer è " + rollComputer);

if (rollPlayer > rollComputer) {
  console.log(`Vince il giocatore \n  Player ${rollPlayer} vs Computer ${rollComputer}`);
} else if (rollPlayer < rollComputer) {
  console.log(`Vince il computer \n  Player ${rollPlayer} vs Computer ${rollComputer}`);
} else {
  console.log(`La partita è finita in pari \n Player ${rollPlayer} vs Computer ${rollComputer}`);
}
