'use strict';

const parola1 = prompt("Inserisci la prima parola");
const parola2 = prompt("Inserisci la seconda parola");
const lParola1 = parola1.length;
const lParola2 = parola2.length;

if (lParola1 > lParola2) {
    alert("La prima parola è più lunga con " + lParola1 + " caratteri contro i " + lParola2 + " caratteri");
    console.log(parola2);
    console.log(parola1);
} else if (lParola2 > lParola1) {
    alert("La seconda parola è più lunga " + lParola2 + " caratteri contro i " + lParola1 + " caratteri");
    console.log(parola1);
    console.log(parola2);
} else {
    alert("Le parole sono di lunghezza uguale con " + lParola1 + " caratteri");
    console.log(parola1);
    console.log(parola2);
}


