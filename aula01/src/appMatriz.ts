let nomes: Array<string> = ['Henrique', 'Beatriz', 'Arian'];
console.log(nomes[1]);

let numeros =[1, 5, 6, 9];

nomes.forEach((x) => {console.log(x)});

numeros.forEach((valor) => {
  if(valor == 9){
    console.log("Este valor é proibido");
  };
  console.log("Valor lido " + valor);
});