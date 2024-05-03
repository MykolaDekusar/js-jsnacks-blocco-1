'use strict';
// Bonus
// Snack 8
// Chiedi un numero di 4 cifre all’utente
// Calcola la somma di tutte le cifre che compongono il numero.
// Stampa il risultato in console

// - Creo un arrayUtente
// - Creo un ciclo for con un loop di 4 volte dove inserisco all'interno dell'array i numeri dell'utente
// - Creo una variabile che somma gli indici dell'arrayUtente
// - Stampo il risultato


//inizializzo la somma
let somma = 0;
//chiedo all'utente un numero
const numeroUtente = Number(prompt("Inserisci un numero di 4 cifre"));
//scompongo il numeroutente in diversi numeri e gli assegno all'array
const arrayUtente = [...numeroUtente.toString()].map(Number);
//verifico che il numero inserito sia valido e di 4 cifre
if (!(isNaN(numeroUtente)) && (arrayUtente.length === 4)) {
    for (let i = 0; i < arrayUtente.length; i++) {
        //sommo i numeri
        somma += arrayUtente[i];
    }
    console.log(`Hai inserito i seguenti numeri: ${numeroUtente} e la somma è di: ${somma}`);
    alert(`Hai inserito i seguenti numeri: ${numeroUtente} e la somma è di: ${somma}`);
} else {
    //se il numero è NaN o è maggiore di 4 cifre lo richiedo
    alert("Inserisci un numero valido e di 4 cifre");
}
//ricarico la pagina
location.reload();

