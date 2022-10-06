import { Component } from '@angular/core';

@Component({
  selector: 'pt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public title="Bem-Vindo!";
  private teste="Esse é privado!";

}
