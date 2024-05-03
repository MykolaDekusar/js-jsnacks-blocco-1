'use strict';
// Snack 5
// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// Se è dispari inseriscilo nell’array.
// Stampa in console l'array risultante.


const listaNumeri = [];
const quantiNumeri = 6;
let numeroUtente = 0;
let listaNumeriSpaziata = [];

for (let i = 0; i < quantiNumeri; i++) {
    numeroUtente = Number(prompt("Inserisci un numero"));
    //verifico che quello inserito sia un numero
    if (!(isNaN(numeroUtente))) {
        //verifico se è dispari
        if (numeroUtente % 2 !== 0) {
            //posiziono il numero nell'array
            listaNumeri.push(numeroUtente);
        }
        //se non è un numero allora richiedo
    } else {
        alert("Inserisci un numero valido");
        i--;
    }
}
console.log(listaNumeri);
//aggiungo uno spazio dopo la , nell'array
listaNumeriSpaziata = listaNumeri.join(', ');


alert(`I numeri dispari inseriti sono ${listaNumeriSpaziata}`);