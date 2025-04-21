const numeri = [2, 5, 8, 3, 10, 7];
// Output atteso: 20 (2 + 8 + 10)
let risultato = 0;

for (let i = 0; i < numeri.length; i++) {
  if (numeri[i] % 2 === 0) {
    risultato += numeri[i];
  }
}

parseInt(risultato);
console.log(risultato);
