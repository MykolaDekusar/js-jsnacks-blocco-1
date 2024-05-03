'use strict';
// Snack 9
// Calcola la somma e la media dei primi 10 numeri.
// Stampa i risultati on console

// - Chiedo all'utente di inserire 10 numeri
// - Verifico che siano numeri validi
// - Se sono numeri validi li sommo
// - Trovo la media dei numeri prendendo la somma dei numeri e dividendola per la lunghezza dell'array
// - Stampo i risultati in console

const numeriUtente = [];
const quantiNumeri = 10;
let NumeriUtenteSpaziati = [];
let nUtente = 0;
let somma = 0;
let media = 0;


for (let i = 0; i < quantiNumeri; i++) {
    //chiedo un numero all'utente
    nUtente = Number(prompt("Inserisci un numero"));
    //verifico il numero
    if (!(isNaN(nUtente))) {
        //sommo i numeri
        somma += nUtente;
        //inserisco il numero nell'array
        numeriUtente[i] = nUtente;
    } else {
        alert("Inserisci un numero valido");
        //richiedo il numero
        i--;
    }
}
//faccio la media
media = somma / numeriUtente.length;
//spazio l'array
NumeriUtenteSpaziati = numeriUtente.join(', ');

console.log(`La somma dei numeri inseriti è di ${somma}, la media è ${media} e i numeri inseriti sono ${NumeriUtenteSpaziati}`);
alert(`La somma dei numeri inseriti è di ${somma}, la media è ${media} e i numeri inseriti sono ${NumeriUtenteSpaziati}`);
