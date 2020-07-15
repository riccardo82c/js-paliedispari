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

/* in fondo al codice creo la funzione */
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

/* ************* */
/* ALTRO METODO  */
/* ************* */
// utilizzo i metodi dell'oggetto stringa per invertire la stringa
// 1. split - crea una arrai contenente tutti gli elementi della stringa
// 2. reverse - inverte un array
// 3. join - converte gil elementi di un array in una stringa

do {
  var parola2 = prompt("Orsù, inserisca una parola, parte seconda");
} while (parola2.length <= 0);

myPali2(parola2);

function myPali2(str2) {
  var reverseStr2 = "";
  reverseStr2 = str2.split("").reverse().join("");

  if (reverseStr2 == str2) {
    console.log("La parola da te inserita E' PALINDROMA");
  } else {
    console.log("La parola inserita NON è palindroma");
  }
}
