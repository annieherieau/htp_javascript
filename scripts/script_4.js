title = "Script 4 : Startup Nation";
output = menu();
label = "Ton choix";
OUTPUT_2.innerHTML = "";

// nés dans les années 70: filtrer [1970-1980[
function seventies(array) {
  let result = array.filter((val) => val.year >= 1970 && val.year < 1980);
  return result;
}

// array des prénoms noms
function names(array) {
  let result = [];
  array.forEach((e) => {
    result.push(`${e.first} ${e.last}`);
  });
  return result;
}

// calculs des âges
function ages(array) {
  let result = array.map(
    (value) =>
      (new_value = {
        first: value.first,
        last: value.last,
        year: value.year,
        age: 2024 - value.year,
      })
  );
  return result;
}

// classer par ordre alpha des Noms (attention casse)
function alphaOrder(array) {
  array.sort((a, b) => {
    let nameA = a.last.toUpperCase();
    let nameB = b.last.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  return array;
}

//menu des fonctions + choix user
function menu() {
  let string = "[1] Entrepreneurs nés dans les années 70<br>";
  string += "[2] Prénoms noms<br>";
  string += "[3] Ages<br>";
  string += "[4] Ordre alphabetique des noms<br>";
  return string;
}

// affichage de l'array
function print(array) {
  let string = "<ul>";
  for (let value of array) {
    if (typeof value == "string") {
      string += "<li>" + value + "</li>";
    } else {
      string += "<li>" + `${value.first} ${value.last} (${value.year})`;
      if (value.age) {
        string += ` Age: ${value.age} ans`;
      }
      string += "</li>";
    }
  }
  string += "</ul>";
  return string;
}

// perform menu et choix user pour chaque fonction
function perform() {
  loadText(title, output, label);

  switch (USER_INPUT.value) {
    case "1":
      OUTPUT_2.innerHTML =
        "<strong>Entrepreneurs nés dans les années 70:</strong><br><br>" +
        print(seventies(entrepreneurs));
      break;
    case "2":
      OUTPUT_2.innerHTML =
        "<strong>Prénoms et Noms :</strong><br><br>" +
        print(names(entrepreneurs));
      break;
    case "3":
      OUTPUT_2.innerHTML =
        "<strong>Ages :</strong><br><br>" + print(ages(entrepreneurs));
      break;
    case "4":
      OUTPUT_2.innerHTML =
        "<strong>Ordre alphabetique des noms :</strong><br><br>" +
        print(alphaOrder(entrepreneurs));
      break;
    default:
      break;
  }
}
clear();
loadText(title, output, label);
