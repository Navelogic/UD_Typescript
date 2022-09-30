function indexOfPalavras(palavra, letra) {
  let i = 0;
  while(i < palavra.length){
      if(palavra[i] == letra){
          return i;
      }
      i++;                 
  }
  return -1;
};

console.log(indexOfPalavras("Teste01", "T"));
console.log(indexOfPalavras("Teste02", "2"));
console.log(indexOfPalavras("Teste03", "e"));

// Segundo Teste FALHOU!//

/*
function indexOfNumeros(conjuntoDeNum, numero){
  let i = 0;
  while(i < conjuntoDeNum.length){
    if(conjuntoDeNum[i] == numero){
      return i;
    }
    i++;
  }
  return -1;
};

console.log(indexOfNumeros(481, 8));
console.log(indexOfNumeros(123456789, 7));
console.log(indexOfNumeros(789456123, 2));
*/