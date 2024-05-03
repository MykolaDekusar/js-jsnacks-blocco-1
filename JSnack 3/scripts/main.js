'use strict';
const nInput = 10;
let somma;
let totale = 0;

for (let i = 0; i < nInput; i++) {
    somma = Number(prompt("Inserisci un numero"));
    if (somma > 0) {
        console.log(somma);
        totale += somma;
        console.log(totale);
    } else {
        alert("Inserisci un numero valido");
        i--;
    }

}
alert("La somma dei numeri è: " + totale);