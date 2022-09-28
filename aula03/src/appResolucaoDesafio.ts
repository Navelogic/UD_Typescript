function resolucaoProblema(){
  let numMax = 6;
  let randomico = [];

  for(let i = 0; i <= 4; i++){
    let temporario = Math.floor(Math.random() * numMax);

    if((randomico.indexOf(temporario) == -1) && (temporario > 0))
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
