console.log("****** Script 3 : Pyramide de Mario ******");

function getUserInput() {
  let user_input = prompt(
    "****** Script 3 : Pyramide de Mario ******\nCombien d'étages veux-tu ?"
  );
  return user_input;
}

function pyramid(number){
let string_alert = '';
let string_console = ''
let j = number;
  for (let i = 1; i <= number; i++) {
    string_console += ' '.repeat(j-i) + '#'.repeat(i)+'\n';
    string_alert += '  '.repeat(j-i) + '#'.repeat(i)+'\n';
  }
  console.log(`Pyramide de ${number} étages:\n${string_console}`);
  return string_alert;
}

alert(pyramid(getUserInput()))