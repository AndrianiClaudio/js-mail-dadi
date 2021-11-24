// Definisco una lista che conterrá i nomi di chi puó accedere
const list = ['user1@gmail.com', 'user2@gmail.com','user3@gmail.com','user4@gmail.com'];
const printDiv = document.getElementById('print-email-find');
// Chiedo all'utente la sua mail
const email = prompt('Inserisci la tua email');
let emailFind = false;
for (let i = 0;i < list.length;i++) {
    if(email == list[i]) {
        emailFind = true;
    }
}
//stampa se trovato
if(emailFind) {
    printDiv.innerHTML = 'Email trovata con successo';
} else {
    printDiv.innerHTML = 'Email non trovata';
}