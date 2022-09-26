class Laptop {
  tela: number;
  constructor(tela: number){
    this.tela = tela;
  };
  ligarMonitor(){
    console.log(`O monitor de ${this.tela} polegadas foi ligado.`);
  };
};

class Lenovo extends Laptop{
  constructor(){
    super(21);
  }
  aumentarBrilho(valor: number){
    console.log(`Brilho subiu ${valor} pontos`);
  }
}

let computador = new Lenovo();

computador.ligarMonitor();
computador.aumentarBrilho(3);