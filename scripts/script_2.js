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


function perform(){
  let user_input = getUserInput();
  let factor_numbers = factorial(user_input);
  let factor = factorResult(factor_numbers);
  let factorString = factor_numbers.join(' * ');
  let string = `La factorielle de ${user_input} est :\n ${factorString} = ${factor}`;
  console.log(string)
  return string
}

alert(perform());
