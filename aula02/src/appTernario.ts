let temMaisTitulos = function(titulos : number) : boolean{
  return titulos > 35;
};

let numero = 8;
console.log(`Ter ${numero} titulos é suficiente para passar o falmengo? ${temMaisTitulos(numero) ? 'Sim' : 'Não'}`);