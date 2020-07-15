/* Palidroma
Chiedere all'utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */

// 1. inserisco parola da prompt e salvo in una var
// 1.1 ciclo do while per verificare che ci sia una parola
do {
  var parola = prompt("Orsù, inserisca una parola");
} while (parola.length <= 0);

// 4. chiamo la funzione (messa qui perchè la creazione è in fondo al codice)
myPali(parola);

// 2. provo l'algoritmo fuori dall function
// var reverseParola = "";

// for (var i = parola.length - 1; i >= 0; i--) {
//   reverseParola += parola[i];
// }

// if (reverseParola == parola) {
//   console.log("La parola da te inserita è palindroma");
// } else {
//   console.log("La parola inserita NON è palindroma");
// }

// console.log(reverseParola);

// 3. creo la funzione
function myPali(str) {
  var reverseStr = "";
  for (var i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }
  if (reverseStr == str) {
    console.log("La parola da te inserita E' PALINDROMA");
  } else {
    console.log("La parola inserita NON è palindroma");
  }
}
