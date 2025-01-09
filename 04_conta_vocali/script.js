/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

// Ho trasformato l'array in una stringa e ho usato un .filter per cercare gli elementi che avevano una vocale con .includes e ho dato in output la lunghezza del nuovo array

// function countVowels(str) {
//     let numOfVowels = Array.from(str).filter(letter => 'aeiou'.includes(letter)).length;

//     return numOfVowels;
// }

const countVowels = str => Array.from(str).filter(letter => 'aeiou'.includes(letter)).length;


// Invoca la funzione qui e stampa il risultato in console

console.log(countVowels(word));


//Risultato atteso se si passa 'javascript': 3 (a, a, i)