title= "Script 5 : Bibliothécaire";
output= menu();
label= "Ton choix";
OUTPUT_2.innerHTML = "";
// menu et choix du user
function menu() {
  let string = "[1] Est-ce que tous les livres ont été au moins empruntés une fois<br>";
  string += "[2] Quel est livre le plus emprunté ?<br>";
  string += "[3] Quel est le livre le moins emprunté ?<br>";
  string += "[4] Trouve le livre avec l'ID: 873495<br>";
  string += "[5] Supprime le livre avec l'ID: 133712<br>";
  string += "[6] Trie les livres par ordre alphabétique<br>";
  return string;
}

// afficher l'array
function print(array) {
  let string = "<ul>";
  for (let value of array) {
    if (typeof value == "string") {
      string += "<li>" + value + "</li>";
    } else {
      string += "<li>" + value.title + "</li>";
    }
  }
  string += "<ul>";
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
  return result;
}

// Le livre le plus empruté (rented reduce max)
function moreBorrowed(array){
  let result = array.reduce(
    (acc, val) => { return (acc && acc.rented > val.rented) ? acc : val; }
  )
  return `${result.title} (${result.rented} fois)`;
}

// Le livre le moins empruté (rented reduce min)
function lessBorrowed(array){
  let result = array.reduce(
    (acc, val) => { return (acc && acc.rented < val.rented) ? acc : val; }
  )
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
  loadText(title, output, label);
  let array =books;
  let id = '';
    switch (USER_INPUT.value) {
      case '1': 
      OUTPUT_2.innerHTML= "<strong>Est-ce que tous les livres ont été au moins empruntés une fois:</strong><br><br>" + borrowedOnce(books);
        break;
      case '2': 
      OUTPUT_2.innerHTML= "<strong>Quel est livre le plus emprunté ?</strong><br><br>" + moreBorrowed(books);
        break;
      case '3': 
      OUTPUT_2.innerHTML= "<strong>Quel est le livre le moins emprunté ?</strong><br>" + lessBorrowed(books);
        break;
      case '4':
        id = 873495;
        OUTPUT_2.innerHTML= "<strong>Trouve le livre avec l'ID: 873495</strong><br>" + findBook(books, id);
        break;
      case '5': 
        array = deleteBook(array, 133712);
        OUTPUT_2.innerHTML= "<strong>Supprime le livre avec l'ID: 133712</strong> (" + findBook(books, id) + ")<br>" + print(array);
        break;
      case '6': 
        id= 133712;
        OUTPUT_2.innerHTML= "<strong>Trie les livres par ordre alphabétique (sans ID: 133712)</strong><br><br>" + print(sortBooks(array));
        break;
      default:
        break;
  }
}

loadText(title, output, label);
