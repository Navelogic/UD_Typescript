import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CabecalhoComponentComponent } from './cabecalho-component/cabecalho-component.component';
import { EstudantesComponent } from './estudantes/estudantes.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponentComponent,
    EstudantesComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
