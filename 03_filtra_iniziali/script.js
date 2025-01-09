/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.

// function iniziaPer(char, list) {
//     let listStartWith = [];
//     for (i = 0; i < list.length; i++) {
//         if (list[i].charAt(0) === char) {
//             listStartWith.push(list[i]);
//         }
//     }
//     return listStartWith;
// }

const iniziaPer = (char, list) => {
    let listStartWith = [];
    for (i = 0; i < list.length; i++) {
        if (list[i].charAt(0) === char) {
            listStartWith.push(list[i]);
        }
    }
    return listStartWith;
}


// Invoca la funzione qui e stampa il risultato in console
let iniziale = prompt("Inserisci una lettera").toUpperCase();
console.log(iniziaPer(iniziale, names));




//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]