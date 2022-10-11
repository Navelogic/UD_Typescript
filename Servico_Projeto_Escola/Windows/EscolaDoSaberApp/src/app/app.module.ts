import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { HistoricoComponent } from './historico/historico.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { AlteracaoComponent } from './alteracao/alteracao.component';
import { CadastroUserComponent } from './cadastro-user/cadastro-user.component';
import { SobreComponent } from './sobre/sobre.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    HeroComponent,
    NavbarComponent,
    HomeComponent,
    HistoricoComponent,
    CadastroComponent,
    AlteracaoComponent,
    CadastroUserComponent,
    SobreComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
