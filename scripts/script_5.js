console.log("****** Script 5 : Bibliothécaire ******\n ");

// menu et choix du user
function getUserInput() {
  let string = "****** Script 5 : Bibliothécaire ******\n\n";
  string += "[1] Est-ce que tous les livres ont été au moins empruntés une fois\n";
  string += "[2] Quel est livre le plus emprunté ?\n";
  string += "[3] Quel est le livre le moins emprunté ?\n";
  string += "[4] Trouve le livre avec l'ID: 873495\n";
  string += "[5] Supprime le livre avec l'ID: 133712\n";
  string += "[6] Trie les livres par ordre alphabétique\n";
  string += "[q] Quitter\n";
  let user_input = prompt(
    string
  );
  return user_input;
}

// afficher l'array
function print(array) {
  let string = "";
  for (let value of array) {
    if (typeof value == "string") {
      string += value + "\n";
    } else {
      string += value.title;
      string += "\n";
    }
  }
  return string;
}

// Empruntés. Faux si au moins 1 rented == 0
function borrowedOnce(array){
  let result = true;
  for (const book in array) {
    if (book.rented == 0){
      result = false;
      break;
    }
    }
  result = result ? 'oui' : 'non';
  console.log("Est-ce que tous les livres ont été au moins empruntés une fois:\n");
  console.log(result);
  return result;
}

// Le livre le plus empruté (rented reduce max)
function moreBorrowed(array){
  let result = array.reduce(
    (acc, val) => { return (acc && acc.rented > val.rented) ? acc : val; }
  )
  console.log("Quel est livre le plus emprunté ?\n");
  console.log(`${result.title} (${result.rented} fois)`);
  return `${result.title} (${result.rented} fois)`;
}

// Le livre le moins empruté (rented reduce min)
function lessBorrowed(array){
  let result = array.reduce(
    (acc, val) => { return (acc && acc.rented < val.rented) ? acc : val; }
  )
  console.log("Quel est livre le moins emprunté ?\n");
  console.log(`${result.title} (${result.rented} fois)`);
  return `${result.title} (${result.rented} fois)`;
}

// trouver le livre avec id
function findBook(array, id){
  let result = false;
  for (let book of array) {
    if (book.id == parseInt(id)){
      result = book.title;
      break;
    } 
  }
  console.log(`Trouve le livre avec l'ID: 873495\n${result}`);
  return result;
}

// supprimer un livre
function deleteBook(array, id){
  let result = '';
  let result_id = '';
  for (let i in array) {
    if (array[i].id == parseInt(id)){
      console.log(i);
      result_id = i;
      break;
    }
  }
  array.splice(result_id, 1);
  console.log(`Supprime le livre avec l'ID: 133712 (${array[result_id].title})`);
  console.log(array);
  return array;
}

// classer par ordre alphabetique du nom (attention casse)
function sortBooks(array){
  array.sort((a, b) => {
    let titleA = a.title.toUpperCase();
    let titleB = b.title.toUpperCase();
    if (titleA < titleB){
      return -1;
    }
    if (titleA > titleB){
      return 1;
    }
    return 0;
  })
  console.log("Ordre alphabetique :");
  console.log(array);
  return array;
}

// perform avec menu des 6 fonction
function perform(){
  let id = '';
  let user_input = getUserInput();
    switch (user_input) {
      case '1': 
        alert(`Est-ce que tous les livres ont été au moins empruntés une fois:\n ${borrowedOnce(books)}`);
        perform();
        break;
      case '2': 
        alert(`Quel est livre le plus emprunté ?\n ${moreBorrowed(books)}`);
        perform();
        break;
      case '3': 
        alert(`Quel est le livre le moins emprunté ?\n ${lessBorrowed(books)}`);
        perform();
        break;
      case '4':
        id = 873495;
        alert(`Trouve le livre avec l'ID: 873495\n ${findBook(books, id)}`);
        perform();
        break;
      case '5': 
        id= 133712;
        alert(`Supprime le livre avec l'ID: 133712 (${findBook(books, id)})\n ${print(deleteBook(books, id))}`);
        perform();
        break;
      case '6': 
        id= 133712;
        alert(`Trie les livres par ordre alphabétique (sans ID: 133712)\n ${print(sortBooks(deleteBook(books, id)))}`);
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
