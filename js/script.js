/*L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto

1 chiedere all'utente di scegliere tra pari o dispari
2 chiedere di scegliere un numero da 1 a 5
3 generare funzione per numero random da 1 a 5
4 creare variante somma
5 creare funzione di somma 
6 funzione per stabiliore se la somma è pari o dispari
7 stampare in pagina chi ha vinto*/

var exercise = document.getElementById("exsercise");

//richiesta informazioni
var userChoice = prompt("Scegli tra Pari o Dispari", "Pari").trim().toLowerCase();
var userNumber = parseInt(prompt("Scegli un numero da 1 a 5", "2"));
var random = randomNumber();
console.log("scelta utente " + userChoice);
console.log("scelta numero " + userNumber);
console.log("scelta random " + random);

//somma numero utente e numero random
var sum = userNumber + random;
console.log("La somma è: " + sum);

var even = isEven(sum);

//stabilire chi ha vinto
if (userChoice === "pari" && even === true) {
    exsercise.innerHTML = "Hai vinto";
}   else { 
    exsercise.innerHTML = "Hai perso";
}

// funzione verifica pari o dispari
function isEven(number) {
    var isEven = false;
    if (number % 2 === 0){
        isEven = true;
    }
    return isEven;
}

// funzione numero random
function randomNumber() {
    var number = Math.floor(Math.random() * 5) + 1;
    return number;
}
