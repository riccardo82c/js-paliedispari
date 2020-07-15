/* Palidroma
Chiedere all'utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */

var parola = prompt("Orsù, inserisca una parola");

var reverseParola = "";

for (var i = parola.length - 1; i >= 0; i--) {
  reverseParola += parola[i];
}

console.log(reverseParola);
