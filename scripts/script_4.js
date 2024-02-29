console.log("****** Script 4 : Startup Nation ******");

// nés dans les années 70: filtrer [1970-1980[
function seventies(array) {
  let result = array.filter((val) => val.year >= 1970 && val.year < 1980);
  console.log("Entrepreneurs nés dans les années 70:");
  console.log(result);
  return result;
}

// array des prénoms noms
function names(array) {
  let result = [];
  array.forEach((e) => {
    result.push(`${e.first} ${e.last}`);
  });
  console.log("Prénoms noms :");
  console.log(result);
  return result;
}

// calculs des âges
function ages(array) {
  let result = array.map((value) => 
    new_value = {
      first: value.first,
      last: value.last,
      year: value.year,
      age: 2024 - value.year
    }
  );
  console.log("Ages :");
  console.log(result);
  return result;
}

// classer par ordre alpha des Noms (attention casse)
function alphaOrder(array){
  array.sort((a, b) => {
    let nameA = a.last.toUpperCase();
    let nameB = b.last.toUpperCase();
    if (nameA < nameB){
      return -1;
    }
    if (nameA > nameB){
      return 1;
    }
    return 0;
  })
  console.log("Ordre alphabetique des noms :")
  console.log(array)
  return array

}

//menu des fonctions + choix user
function getUserInput() {
  let string = "****** Script 4 : Startup Nation *****\n\n";
  string += "[1] Entrepreneurs nés dans les années 70\n";
  string += "[2] Prénoms noms\n";
  string += "[3] Ages\n";
  string += "[4] Ordre alphabetique des noms\n";
  string += "[q] Quitter\n";
  let user_input = prompt(
    string
  );
  return user_input;
}

// affichage de l'array
function print(array) {
  let string = "";
  for (let value of array) {
    if (typeof value == "string") {
      string += value + "\n";
    } else {
      string += `${value.first} ${value.last} (${value.year})`;
      if (value.age) {
        string += ` Age: ${value.age} ans`;
      }
      string += "\n";
    }
  }
  return string;
}

// perform menu et choix user pour chaque fonction
function perform(){
  let user_input = getUserInput();
    switch (user_input) {
      case '1': 
        alert("Nés dans les années 70:\n" + print(seventies(entrepreneurs)));
        perform();
        break;
      case '2': 
        alert("Prénoms et Noms : \n" + print(names(entrepreneurs)));
        perform();
        break;
      case '3': 
        alert("Ages : \n" + print(ages(entrepreneurs)));
        perform();
        break;
      case '4': 
        alert("Ordre alphabetique des noms : \n" + print(alphaOrder(entrepreneurs)));
        perform();
        break;
      case 'q':
        break; 
      default:
        perform()
        break;
    
  }

}

perform();
