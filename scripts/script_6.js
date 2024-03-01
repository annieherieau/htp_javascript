title = "Script 6 : Code la vie";
output = "Écris ta séquence ARN :";
OUTPUT_2.innerHTML = "";
// décoper ARN par triplet (return array)
function getCodons(rna_string) {
  return rna_string.match(/.{1,3}/g) || []; // séparation tous les 3 caractères
}

// recherche du codon dans l'array rna
function decodeRna(codons_array, acids_array = amino_acids_data) {
  let result = codons_array.map((codon) => {
    // console.log('codon :' + codon);
    for (const acid of acids_array) {
      if (acid.codons.includes(codon)) {
        // console.log('A-Acid : ' + acid.name);
        return acid.name;
      }
    }
  });
  // console.log(print(result));
  return result;
}

// renvoyer string des Acides aminés
function print(array) {
  return array.join("-");
}

function perform() {
  loadText(title, output, label);
  let codons = getCodons(USER_INPUT.value);
  let amino_acids = decodeRna(codons);
  let string = print(amino_acids);
  OUTPUT_2.innerHTML = string;
}
clear();
loadText(title, output, label);
