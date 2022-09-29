import { Caminhao } from "./Caminhao";
import { Moto } from "./Moto";

let caminhaoDoZe = new Caminhao();

console.log(`O caminhão do Zé é ${caminhaoDoZe.cor}. Da marcar ${caminhaoDoZe.fabricante} e do modelo ${caminhaoDoZe.modelo}`);
caminhaoDoZe.acelerar();

let motoDoChefe = new Moto('Preta', 'Fiat', 'V4');
console.log(`A moto do Chefe é ${motoDoChefe.cor}, da marca ${motoDoChefe.fabricante} modelo ${motoDoChefe.modelo}`);
motoDoChefe.empinar();