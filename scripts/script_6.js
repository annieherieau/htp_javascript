
// décoper ARN par triplet (return array)
function getCodons(rna_string){
  return rna_string.match(/.{1,3}/g) || []; // séparation tous les 3 caractères 
}

// recherche du codon dans l'array rna
function decodeRna(codons_array, acids_array=amino_acids_data){

  let result = codons_array.map(
    (codon) => {
      // console.log('codon :' + codon);
      for (const acid of acids_array) {
        if ((acid.codons.includes(codon))){
          // console.log('A-Acid : ' + acid.name);
          return acid.name;
        }
      }
    }
  )
  // console.log(print(result));
  return result;
}

// renvoyer string des Acides aminés
function print(array){
  return array.join('-');
}

function perform(rna){

  let codons = getCodons(rna);
  let amino_acids = decodeRna(codons);
  let string = `${print(codons)}<br>${print(amino_acids)}`;

  TITLE.innerHTML = "Script 6 : Code la vie";
  if (OUTPUT_1.innerHTML == ''){
    OUTPUT_1.innerHTML = rna + "<br>" + string;
  }else{
    OUTPUT_2.innerHTML = rna + "<br>" + string;
  }
}

perform('CCGUCGUUGCGCUACAGC');
perform('CCUCGCCGGUACUUCUCG');