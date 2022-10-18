
/* chiedere all'utente il suo nome */

let userName = prompt('Qual è il tuo nome?');
console.log(userName);

/* chiedere all'utente il suo nome */

let userSurname = prompt('Qual è il tuo cognome?');
console.log(userSurname);

/* chiedere all'utente il suo colore preferito */

let userColor = prompt('Qual è il tuo colore preferito?');
console.log(userColor);

/* numero */

let number = 14;
console.log(number);

/* FRASE password */

document.getElementById('usPass').innerHTML = 
`La tua password insicurissima è: ${userName}${userSurname}${userColor}${number}`