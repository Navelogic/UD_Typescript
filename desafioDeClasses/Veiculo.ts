export class Veiculo{
  cor: string;
  fabricante: string;
  modelo: string;
  velocidade: number;

  constructor(velocidade: number){
    this.velocidade = velocidade;
  };

  acelerar(){
    console.log('0Kms/h ... 20Km/h ... 40Km/h');
  };

  parar(){
    console.log('40Km/h ... 20Km/h ... 0Km/s');
  };
};