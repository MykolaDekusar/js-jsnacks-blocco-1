'use strict';

const parola1 = (prompt("Inserisci la prima parola")).length;
const parola2 = (prompt("Inserisci la seconda parola")).length;

if (parola1 > parola2) {
    alert("La prima parola è più lunga con " + parola1 + " caratteri contro i " + parola2 + " caratteri");
    console.log(parola2);
    console.log(parola1);
} else if (parola2 > parola1) {
    alert("La seconda parola è più lunga" + parola2 + " caratteri contro i " + parola1 + " caratteri");
    console.log(parola1);
    console.log(parola2);
} else {
    alert("Le parole sono di lunghezza uguale con " + parola1 + " caratteri");
    console.log(parola1);
    console.log(parola2);
}


