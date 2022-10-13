let tempo = function(clima: string = "Nublado"): string{
  return clima;
};

if(tempo() != "Nublado"){
  console.log(`O tempo está ${tempo()}`);
}else{
  console.log("Vamos sair!");
};