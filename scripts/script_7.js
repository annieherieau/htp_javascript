title= "Script 7 : Acné-Bot";
output= "Écris une phrase :";

// 1. c'est une question ?
function isQuestion(input){
  return input[input.length-1]=='?' ? "Ouais Ouais..." : false;
}

// 2. Hurler : avec des lettres et pas de minuscules
function isYelling(input){
  if (input.match(/\w/) && !input.match(/[a-z]/) ){
    return "Pwa, calme-toi...";
  }else{
    return false;
  }
}

// 3. contient Fortnite
function playGame(input){
  return input.toLowerCase().includes("fortnite") ? "On s' fait une partie soum-soum ?" : false;
}

// 4. vide => PLS
function isEmpty(input){
  OUTPUT_2.className = "visible";
  return input ? false : "T'es en PLS ?";
}

// réponse du bot selon les priorités
function acneBot(input){
  if (isQuestion(input)){return isQuestion(input)};
  if (isYelling(input)){return isYelling(input)};
  if (playGame(input)){return playGame(input)};
  if (isEmpty(input)){return isEmpty(input)};
  return "Balek.";
}

// Exécution
function perform(){
  loadText(title, output, label);
  OUTPUT_2.innerHTML = acneBot(USER_INPUT.value);
}

loadText(title, output, label);