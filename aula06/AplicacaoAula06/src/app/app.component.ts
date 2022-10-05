import { Component } from '@angular/core';

@Component({
  selector: 'AA6-root',
  templateUrl: './app.component.html'

})
export class AppComponent {
  anaClara = {nome: 'Ana Clara', aprovado: true, escola: 'Senac'};
  arian = {nome: 'Arian', aprovado: false, escola: 'Senac'};
  nicolas = {nome: 'Nicolas', aprovado: true, escola: 'Senac'};
  marcus = {nome: 'Marcus', aprovado: true, escola: 'Senac'};
}
