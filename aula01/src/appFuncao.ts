// Função Tradicional
function somar (x: number, y:number): number {
  return x + y;
};
console.log("Tradicional: O valor da soma é " + somar(6, 4));

//Função Anônima
let fucao = function(x: number, y:number): number {
  return x + y;
};
console.log("Anônima: O valor da soma é " + fucao(4,4));

//Arrow function
