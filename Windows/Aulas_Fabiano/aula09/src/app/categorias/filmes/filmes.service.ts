import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable } from "rxjs";
import { CINEMA_API } from "src/app/app.api";
import { ErrorHandler } from "src/app/app.error-handler";
import { Filme } from "./filme/filme.model";
import { Categoria } from "../categoria/categoria.model";

@Injectable()
export class FilmesService {
  filmes: Filme[] = [];
  categorias: Categoria[] = [];
  
  constructor(private http: HttpClient){}

  listarFilmes(id: number): Observable<Filme[]>{
    return this.http.get<Filme[]>(`${CINEMA_API}/filmes?categoriaId=${id}`).pipe(catchError(ErrorHandler.handleError));
  }
}