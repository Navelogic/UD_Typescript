import { Veiculo } from "./Veiculo";

export class Caminhao extends Veiculo{
  tamanhoCacamba: number;

  constructor(tamanhoCacamba: number){
    super('Vermelho', 'Scania', 'V.18');
  };

  descarregar(){
    console.log('A caçamba está descarregando...');
  };


};