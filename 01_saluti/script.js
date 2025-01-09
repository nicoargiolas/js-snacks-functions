/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.

// function saluti(nome) {
//     return `Ciao ${nome}`
// }

const saluti = nome => `Ciao ${nome}`;




// Invoca la funzione qui e stampa il risultato in console

// console.log(saluti(userName));

console.log(saluti(userName));




//Risultato atteso se si passa 'Mario': // ciao Mario
