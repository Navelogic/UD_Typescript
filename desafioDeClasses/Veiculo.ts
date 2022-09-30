export class Veiculo{
  cor: string;
  fabricante: string;
  modelo: string;

  constructor(cor: string, fabricante: string, modelo:string){
    this.cor = cor;
    this.fabricante = fabricante;
    this.modelo = modelo;
  };

  acelerar(){
    console.log('0Kms/h ... 20Km/h ... 40Km/h');
  };

  parar(){
    console.log('40Km/h ... 20Km/h ... 0Km/s');
  };
};