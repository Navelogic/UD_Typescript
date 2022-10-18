import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { SobreComponent } from './sobre/sobre.component';
import { ListaComponent } from './lista/lista.component';
import { AlunosComponent } from './alunos/alunos.component';
import { AlunoComponent } from './alunos/aluno/aluno.component';
import { BotaoListaComponent } from './botao-lista/botao-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    SobreComponent,
    ListaComponent,
    AlunosComponent,
    AlunoComponent,
    BotaoListaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
