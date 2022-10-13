import { Component } from '@angular/core';
import { Estudante } from './estudantes/estudante.model';

@Component({
  selector: 'AA6-root',
  templateUrl: './app.component.html'

})
export class AppComponent {
  estudantes: Estudante[] = [
  {nome: 'Ana Clara', aprovado: true, escola: 'Senac'},
  {nome: 'Arian', aprovado: false, escola: 'Senac'},
  {nome: 'Nicolas', aprovado: true, escola: 'Cama'},
  {nome: 'Marcus', aprovado: true, escola: 'Senac'}];
}
