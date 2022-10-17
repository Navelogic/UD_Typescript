import { CINEMA_API } from "../app.api";
import { HttpClient } from "@angular/common/http";
import { Categoria } from "./categoria/categoria.model";
import { catchError, Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { ErrorHandler } from "../app.error-handler";

@Injectable()
export class CategoriasService {
  categorias: Categoria[] = [];
  constructor(private http: HttpClient){}

  listarCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${CINEMA_API}/categorias`)
    
    .pipe(catchError(ErrorHandler.handleError));
  }
}