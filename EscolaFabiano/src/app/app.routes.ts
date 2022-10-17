import { Routes } from "@angular/router";
import { HeroComponent } from "./hero/hero.component";
import { SobreComponent } from "./sobre/sobre.component";
import { ListaComponent } from "./lista/lista.component";
import { AlunosComponent } from "./alunos/alunos.component";

export const ROUTES: Routes = [
  { path: "", component: HeroComponent},
  { path: "sobre", component: SobreComponent},
  { path: "lista", component: ListaComponent},
  { path: "alunos", component: AlunosComponent},
];