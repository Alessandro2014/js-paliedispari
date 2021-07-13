/*Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma 
1 richiesta parola
2 creazione funzione tramite ciclo while
3 verifica con stampa risultato*/


var exercise = document.getElementById("exsercise");

var userChoice = prompt("Scegli una parola");
userChoice = userChoice.trim().toLowerCase();

var word = userChoice;
var wordReverse = reverse(word);

//VERIFICA DEL RISULTATO OTTENUTO
if(word == wordReverse){
    exsercise.innerHTML = "La parola inserita è palindroma";
  } else {
    exsercise.innerHTML = "La parola inserita non è palindroma";
}

// FUNZIONE TRAMITE CICLO WHILE
function reverse(word){
  var wordReverse = '';
  var i = word.length - 1;
  while (i >= 0) {
    wordReverse += word[i];
    i--;
  }

  return wordReverse;
}



