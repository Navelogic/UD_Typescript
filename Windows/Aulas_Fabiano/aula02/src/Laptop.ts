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

interface Gamer {
  memoriaVideo: number;
}

class LenovoGamer extends Laptop implements Gamer {
  memoriaVideo: number;

  constructor() {
    super(21);
  }

  memoriadeVideo(memoriaVideo: number = 512) {
    console.log(`A mémoria de vide é ${memoriaVideo}`);
  }
}

let computador = new Lenovo();
let computadorGamer = new LenovoGamer();
computador.ligarMonitor();
computador.aumentarBrilho(3);
computadorGamer.memoriadeVideo();
