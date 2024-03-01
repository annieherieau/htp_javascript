function changeScript(value) {
  let s = document.createElement("script");
  s.type = "text/javascript";
  s.src = "scripts/script_" + value + ".js";
  // s.innerHTML = null;
  // s.id = "myScript";
  // document.getElementById("myScript").innerHTML = "";
  document.getElementById("myScript").appendChild(s);
}

function loadText(title, output, label) {
  TITLE.innerHTML = title;
  OUTPUT_1.innerHTML = output;
  LABEL.innerHTML = label;
  FORM_CONTAINER.className = "visible";
  USER_INPUT.value
    ? (OUTPUT_2.className = "visible")
    : (OUTPUT_2.className = "invisible");
}

function clear() {
  USER_INPUT.value = "";
  OUTPUT_2.innerHTML = "";
  OUTPUT_2.className = "invisible";
}

let title = "";
let output = "";
let label = "";

// Eléments HTML
const TITLE = document.getElementById("script_title");
const OUTPUT_1 = document.getElementById("output_1");
const FORM_CONTAINER = document.getElementById("form_container");
const HIDDEN = document.getElementById("hidden");
const LABEL = document.getElementById("input_label");
const USER_INPUT = document.getElementById("user_input");
const HELP_TEXT = document.getElementById("helpText");
const OUTPUT_2 = document.getElementById("output_2");

const entrepreneurs = [
  { first: "Steve", last: "Jobs", year: 1955 },
  { first: "Oprah", last: "Winfrey", year: 1954 },
  { first: "Bill", last: "Gates", year: 1955 },
  { first: "Sheryl", last: "Sandberg", year: 1969 },
  { first: "Mark", last: "Zuckerberg", year: 1984 },
  { first: "Beyonce", last: "Knowles", year: 1981 },
  { first: "Jeff", last: "Bezos", year: 1964 },
  { first: "Diane", last: "Hendricks", year: 1947 },
  { first: "Elon", last: "Musk", year: 1971 },
  { first: "Marissa", last: "Mayer", year: 1975 },
  { first: "Walt", last: "Disney", year: 1901 },
  { first: "Larry", last: "Page", year: 1973 },
  { first: "Jack", last: "Dorsey", year: 1976 },
  { first: "Evan", last: "Spiegel", year: 1990 },
  { first: "Brian", last: "Chesky", year: 1981 },
  { first: "Travis", last: "Kalanick", year: 1976 },
  { first: "Marc", last: "Andreessen", year: 1971 },
  { first: "Peter", last: "Thiel", year: 1967 },
];

const books = [
  { title: "Gatsby le magnifique", id: 133712, rented: 39 },
  { title: "A la recherche du temps perdu", id: 237634, rented: 28 },
  { title: "Orgueil & Préjugés", id: 873495, rented: 67 },
  { title: "Les frères Karamazov", id: 450911, rented: 55 },
  { title: "Dans les forêts de Sibérie", id: 8376365, rented: 15 },
  { title: "Pourquoi j'ai mangé mon père", id: 450911, rented: 45 },
  { title: "Et on tuera tous les affreux", id: 67565, rented: 36 },
  { title: "Le meilleur des mondes", id: 88847, rented: 58 },
  { title: "La disparition", id: 364445, rented: 33 },
  { title: "La lune seule le sait", id: 63541, rented: 43 },
  { title: "Voyage au centre de la Terre", id: 4656388, rented: 38 },
  { title: "Guerre et Paix", id: 748147, rented: 19 },
];

const amino_acids_data = [
  { name: "Sérine", codons: ["UCU", "UCC", "UCA", "UCG", "AGU", "AGC"] },
  { name: "Proline", codons: ["CCU", "CCC", "CCA", "CCG"] },
  { name: "Leucine", codons: ["UUA", "UUG"] },
  { name: "Phénylalanine", codons: ["UUU", "UUC"] },
  {
    name: "Arginine",
    codons: ["CGU", "CGC", "CGA", "CGG", "AGA", "AGG"],
  },
  { name: "Tyrosine", codons: ["UAU", "UAC"] },
];
