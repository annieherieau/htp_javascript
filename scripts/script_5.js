console.log("****** Script 5 : Bibliothécaire ******\n ");

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

function moreBorrowed(array){
  let result = array.reduce(
    (acc, val) => { return (acc && acc.rented > val.rented) ? acc : val; }
  )
  console.log("Quel est livre le plus emprunté ?\n");
  console.log(`${result.title} (${result.rented} fois)`);
  return `${result.title} (${result.rented} fois)`;
}

function lessBorrowed(array){
  let result = array.reduce(
    (acc, val) => { return (acc && acc.rented < val.rented) ? acc : val; }
  )
  console.log("Quel est livre le moins emprunté ?\n");
  console.log(`${result.title} (${result.rented} fois)`);
  return `${result.title} (${result.rented} fois)`;
}

function findBook(array, id){
  let result = 'aucun';
  for (let book of array) {
    if (book.id == parseInt(id)){
      result = book.title;
      break;
    } 
  }
  console.log("Trouve le livre avec l'ID: 873495");
  console.log(result);
  return result;
}

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

function sortBooks(array){
  array.sort((a, b) => {
    let nameA = a.title.toUpperCase();
    let nameB = b.title.toUpperCase();
    if (nameA < nameB){
      return -1;
    }
    if (nameA < nameB){
      return 1;
    }
    return 0;
  })
  console.log("Ordre alphabetique :");
  console.log(array);
  return array;
}

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
