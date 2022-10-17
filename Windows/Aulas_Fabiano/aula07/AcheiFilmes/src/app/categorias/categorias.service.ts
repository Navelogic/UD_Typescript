
import { CINEMA_API } from "../app.api";
import { HttpClient } from "@angular/common/http";
import { Categoria } from "./categoria/categoria.model";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class CategoriasService {
  categorias: Categoria[] = [];
  constructor(private http: HttpClient){}

  listarCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${CINEMA_API}/categorias`);
  }
}