'use strict';
const nInput = 10;
let somma = 0;
let totale = 0;

for (let i = 0; i < nInput; i++) {
    somma = Number(prompt("Inserisci un numero"));
    console.log(somma);
    totale = totale + somma;
    console.log(totale);
}
alert("La somma dei numeri è: " + totale);