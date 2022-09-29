import { Veiculo } from "./Veiculo";

export class Caminhao extends Veiculo{
  tamanhoCacamba: number = 40;

  constructor(){
    super('Vermelho', 'Scania', 'V.18');
  };

  descarregar(){
    console.log('A caçamba está descarregando...');
  };


};