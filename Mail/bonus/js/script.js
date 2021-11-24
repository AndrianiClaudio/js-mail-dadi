// Definisco una lista che conterrá i nomi di chi puó accedere
const list = ['user1@gmail.com', 'user2@gmail.com', 'user3@gmail.com', 'user4@gmail.com'];
// rimangio in attesa del click sul bottone
const button = document.getElementById('submit-mail');
// Evento:in attesa del click sul bottone
button.addEventListener('click', function (){
    //ottengo email digitata da utente
    const email = document.getElementById('email-input').value;
    //leggo la lista e controllo se la mail é presente
    let text = 'La tua email non risulta essere presente nella lista';
    for (let i = 0;i < list.length;i++) {
        //per ogni elemento della lista controllo se é presente il valore. aggiunto un break per non usare un do - while / while
        if(email == list[i]) {
            text = 'la tua email risulta essere presente nella lista';
            break;
        }
    }
    const printDiv = document.getElementById('print-email-find');
    printDiv.innerHTML = text;
});