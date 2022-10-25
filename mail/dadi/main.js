`use strict`

/* Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto. */

/* Chiedi al giocatore di inserire un numero da 1 a 6 */
const userNumber = Math.floor(Math.random() * 6) + 1;
console.log(`il numero dell\'utente:`, userNumber);

/* Faccio generare al cpu un numero da 1 a 6 */
const cpuNumber = Math.floor(Math.random() * 6) + 1;
console.log(`il numero della cpu:`, cpuNumber);

/* Stabilire il vincitore, in base a chi fa il punteggio più alto. */
let result;
if ( userNumber > cpuNumber) {
    result = alert("Hai vinto")
} else if ( userNumber < cpuNumber) {
    result = alert("Hai perso")
} else {
    result = alert("Ritenta")
}
console.log(result);