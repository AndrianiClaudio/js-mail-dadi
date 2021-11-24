const numPrint = document.getElementById('number-print');
const btnGen = document.getElementById('number-gen');
btnGen.addEventListener('click', function() {
    //Genera due numeri random da 1 a 6
    const numPc = Math.floor(Math.random() * 6) + 1;
    const numUser = Math.floor(Math.random() * 6) + 1;
    const divPrint = document.getElementById('print-result');
    console.log(numPc,numUser);
    const text = 
    `
    Numero giocatore: ${numUser}
    Numero computer: ${numPc}
    `;
    numPrint.append(text);
    if(numPc == numUser) {
        divPrint.innerHTML = 'I numeri sono uguali';
    } else if(numPc > numUser) {
        divPrint.innerHTML = 'Il numero del giocatore é minore del numero del PC';
    } else {
        divPrint.innerHTML = 'Il numero del giocatore é maggiore del numero del PC';
    }
});