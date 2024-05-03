'use strict';
const nInput = 10;
let somma;
let totale = 0;

for (let i = 0; i < nInput; i++) {
    //chiedo all'utente nInput numeri
    somma = Number(prompt("Inserisci un numero"));
    //controllo se il numero inserito è un numero
    if (!(isNaN(somma))) {
        console.log(somma);
        totale += somma;
        console.log(totale);
        //se non lo è allora richiedo
    } else {
        alert("Inserisci un numero valido");
        // i= i-1
        i--;
    }

}
alert("La somma dei numeri è: " + totale);