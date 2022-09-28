class Laptop {
  tela: number;
  constructor(tela: number){
    this.tela = tela;
  };
  ligarMonitor(){
    console.log(`O monitor de ${this.tela} polegadas foi ligado.`);
  };
};


interface Gamer {
  memoriaVideo: number;
};