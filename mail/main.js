`use strict`

/* Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo. */

/* lista di mail che possono accedere */
const listMail = ["eleonora@gmail.com", "edoardo@gmail.com", "guenda@gmail.com", "macho@gmail.com"];
listMail[0]
listMail[1]
listMail[2]
listMail[3]
console.log(listMail);

/* Chiedi all’utente la sua email */
const eMail = prompt ("Scrivi la tua email");
console.log(eMail);

/* controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo. */ 
if (listMail.indexOf(eMail) != -1) {
    alert("l'utente ha l'accesso")
} else {
    alert("l'utente non è abilitato all'accesso")    
}
