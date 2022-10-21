import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { RodapeComponent } from './rodape/rodape.component';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { CategoriasComponent } from './categorias/categorias.component';
import { CategoriaComponent } from './categorias/categoria/categoria.component';
import { CategoriasService } from './categorias/categorias.service';
import { HttpClientModule } from '@angular/common/http';
import { TerrorComponent } from './categorias/terror/terror.component';
import { AventuraComponent } from './categorias/aventura/aventura.component';
import { RomanceComponent } from './categorias/romance/romance.component';
import { HeroisComponent } from './categorias/herois/herois.component';
import { FilmesComponent } from './categorias/filmes/filmes.component';
import { FilmeComponent } from './categorias/filmes/filme/filme.component';
import { FilmesService } from './categorias/filmes/filmes.service';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    HomeComponent,
    SobreComponent,
    CategoriasComponent,
    CategoriaComponent,
    TerrorComponent,
    AventuraComponent,
    RomanceComponent,
    HeroisComponent,
    FilmesComponent,
    FilmeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule
  ],
  providers: [CategoriasService, FilmesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
