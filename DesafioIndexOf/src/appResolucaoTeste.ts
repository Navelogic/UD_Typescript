import { Buscar } from "./appResolucao";

let numeros: Array<number> = [3, 5, 7, 9, 11, 13, 15];
let x: number = 2;

let b: Buscar = new Buscar();
let achei: boolean = b.existeValor(numeros, x);

console.log(`Encontrou o valor? ${achei}`);