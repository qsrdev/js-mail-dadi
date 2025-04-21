const arr = [10, 20, 30, 40, 50, 60];
let somma = 0;

for (let i = 0; i < arr.length; i++) {
  const element = arr[i];
  console.log(element);

  if (i % 2 != 0) {
    somma += element;
  }
}

console.log(somma);
