console.log("****** Script 7 : Acné-Bot ******");

// phrase du user
function getUserInput(){
  let user_input = prompt("****** Script 7 : Acné-Bot ******\n[q] Quitter\nÉcris une phrase :");
  return user_input;
}

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

// 
function perform(){
  let user_input = getUserInput();
  switch (user_input){
    case 'q':
      break;
    default:
      alert(acneBot(user_input));
      perform()
      break;
  }
}

perform();