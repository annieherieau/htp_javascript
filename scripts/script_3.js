title= "Script 3 : Pyramide de Mario";
output= "Combien d'étages veux-tu ?";
label= "Nombre entier positif";
OUTPUT_2.innerHTML = "";

// afficher une pyramide inversée
function pyramid(number){
let string = '';
let j = number;
  for (let i = 1; i <= number; i++) {
    string +='&nbsp;&nbsp;&nbsp;'.repeat(j-i) + '#'.repeat(i)+'<br>';
  }
  return string ;
}

function perform(){
  loadText(title, output, label);
  OUTPUT_2.innerHTML = pyramid(USER_INPUT.value);
}

clear();
loadText(title, output, label);