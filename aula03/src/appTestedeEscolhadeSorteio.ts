function resolucaoProblema1(){
  let numMax = 10;
  let randomico = [];

  for(let i = 0; i <= 9; i++){
    let temporario = Math.floor(Math.random() * numMax + 1);

    if(randomico.indexOf(temporario) == -1 && temporario > 0)
    {
        randomico.push(temporario);
    } 
    else 
    {
      i--;
    };
  };
  return randomico;
};