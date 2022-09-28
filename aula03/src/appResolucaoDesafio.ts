function resolucaoProblema(){
  let numMax = 81;
  let randomico = [];

  for(let i = 0; i <= 5; i++){
    let temporario = Math.floor(Math.random() * numMax);

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
