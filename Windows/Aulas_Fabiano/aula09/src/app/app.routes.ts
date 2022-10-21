import { Routes } from "@angular/router";
import { AventuraComponent } from "./categorias/aventura/aventura.component";
import { CategoriasComponent } from "./categorias/categorias.component";
import { FilmeComponent } from "./categorias/filmes/filme/filme.component";
import { FilmesComponent } from "./categorias/filmes/filmes.component";
import { HeroisComponent } from "./categorias/herois/herois.component";
import { RomanceComponent } from "./categorias/romance/romance.component";
import { TerrorComponent } from "./categorias/terror/terror.component";
import { HomeComponent } from "./home/home.component";
import { SobreComponent } from "./sobre/sobre.component";

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},

    {path: 'categorias', component: CategoriasComponent},
    {path: 'filmes/:id', component: FilmesComponent},

    {path:'terror', component: TerrorComponent},
    {path:'aventura', component: AventuraComponent},
    {path:'herois', component: HeroisComponent},
    {path:'romance', component: RomanceComponent},
    {path:'terror', component: TerrorComponent},
    
    {path: 'sobre', component: SobreComponent}
];