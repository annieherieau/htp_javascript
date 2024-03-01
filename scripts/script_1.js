title= "Script 1 : Bonjour";
output= "Comment t'appelles-tu ?";
label= "Ton prénom : ";
OUTPUT_2.innerHTML = "";

function perform(){
  loadText(title, output, label);
  OUTPUT_2.className = 'visible';
  let name = '';
  USER_INPUT.value ? name = USER_INPUT.value : name = 'monde';
  OUTPUT_2.innerHTML = 'Bonjour '+ name ;
}


loadText(title, output, label);