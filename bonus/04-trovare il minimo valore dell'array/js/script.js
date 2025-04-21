const numeri = [45, 2, 89, 3, 22, 1];

let numeroPiccolo = numeri[0];

// let numeroPiccolo = Math.min(...numeri);
// console.log(numeroPiccolo);

for (let i = 0; i < numeri.length; i++) {
  if (numeri[i] < numeroPiccolo) {
    numeroPiccolo = numeri[i];
  }
}

console.log(numeroPiccolo);
