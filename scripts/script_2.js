// Suite des facteurs
function factorial(number) {
  let array = []
  for (let i = number; i > 0; i--) {
    array.push(i);
  }
  return array;
}

function factorResult(factor_numbers){
  return factor_numbers.reduce(
    (acc, val) => acc * val
  )
}
// choix du user
function getUserInput() {
  let user_input = prompt(
    "****** Script 2 : Factorielles ******\nDe quel nombre veux-tu calculer la factorielle ?"
  );
  return user_input;
}

function validateInput(){
  let user_input = parseInt(USER_INPUT.value);
  let help_text;
  (isNaN(user_input) || x < 0 ) ? help_text = 'invalid' : '';
  HELP_TEXT.innerHTML = help_text;
}

function perform(){
  loadText();
  let user_input = USER_INPUT.value;
  let factor_numbers = factorial(user_input);
  let factor = factorResult(factor_numbers);
  let factorString = factor_numbers.join(' * ');
  let string = `La factorielle de ${user_input} est :<br> ${factorString} = ${factor}`;
  OUTPUT_2.innerHTML = string;
}

function loadText(){
  TITLE.innerHTML = "Script 2 : Factorielles";
  OUTPUT_1.innerHTML = "De quel nombre veux-tu calculer la factorielle ?";
  LABEL.innerHTML = "Nombre entier positif";
  FORM_CONTAINER.className = "visible";
  USER_INPUT.value ? OUTPUT_2.className= "visible" : OUTPUT_2.className= "invisible";
}

loadText();
