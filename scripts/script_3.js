
// choix du user
function getUserInput() {
  let user_input = prompt(
    "****** Script 3 : Pyramide de Mario ******\nCombien d'étages veux-tu ?"
  );
  return user_input;
}

// afficher une pyramide inversée
function pyramid(number){
let string = '';
let j = number;
  for (let i = 1; i <= number; i++) {
    string +='&nbsp;&nbsp;&nbsp;'.repeat(j-i) + '#'.repeat(i)+'<br>';
  }

  TITLE.innerHTML = "Script 3 : Pyramide de Mario";
  OUTPUT_1.innerHTML = string ;
}

// perform
pyramid(getUserInput())