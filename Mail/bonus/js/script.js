// Definisco una lista che conterrá i nomi di chi puó accedere
const list = ['user1@gmail.com', 'user2@gmail.com','user3@gmail.com','user4@gmail.com'];
// rimangio in attesa del click sul bottone
const button = document.getElementById('submit-mail');
/* check:
    TRUE = email trovata
    FALSE = // non trovata(default)*/
let check = false;
// Evento:in attesa del click sul bottone
button.addEventListener('click', function (){
    //ottengo email digitata da utente
    const emailInput = document.getElementById('email-input');
    //leggo la lista e controllo se la mail é presente
    for (let i = 0;i < list.length;i++) {
        //per ogni elemento della lista controllo se é presente il valore. aggiunto un break per non usare un do - while / while
        if(emailInput.value == list[i]) {
            emailFind = true;
            break;
        }
        else { //TESTL funzione correttamente
            console.log(list[i]);
        }
}
});
// //verifico presenza email nella mia lista
// for (let i = 0;i < list.length;i++) {
//     let emailFind = false;
//     if(email == list[i]) {
//         emailFind = true;
//     }
// }
// //stampa se trovato
// const printDiv = document.getElementById('print-email-find');
// if(emailFind) {
//     printDiv.innerHTML = 'Email trovata con successo';
// } else { //stampo che non é stata trocata la email
//     printDiv.innerHTML = 'Email non trovata';
// }