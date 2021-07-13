/*Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */

var exercise = document.getElementById("exsercise");

var userChoice = prompt("Scegli una parola");

var word = userChoice;
var wordReverse = reverse(word);

if(word == wordReverse){
    exsercise.innerHTML = "La parola inserita è palindroma";
  } else {
    exsercise.innerHTML ="La parola inserita non è palindroma";
}

function reverse(str){
  var wordReverse = '';

  var i = str.length - 1;

  while (i >= 0) {
    wordReverse += str[i];
    i--;
  }

  return wordReverse;
}



