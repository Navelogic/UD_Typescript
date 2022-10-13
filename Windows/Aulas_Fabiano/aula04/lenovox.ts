import { Laptop } from "./computador-base";
import { Gamer } from "./computador-base";

export class LenovoGamer extends Laptop implements Gamer {
  memoriaVideo: number;

  constructor() {
    super(21);
  }

  memoriadeVideo(memoriaVideo: number = 512) {
    console.log(`A mémoria de vide é ${memoriaVideo}`);
  }
};