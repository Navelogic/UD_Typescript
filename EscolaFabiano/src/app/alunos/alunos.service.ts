import { Aluno } from "./aluno/aluno.model";
import { ESCOLA_FABIANO_API } from "../app.api";
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from "rxjs";
import { ErrorHandler } from "../app.error-handler";

@Injectable()
export class AlunosService {
  alunos: Aluno[] = [];

  constructor(private http: HttpClient) {}

  listarAlunos(): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(`${ESCOLA_FABIANO_API}/aluno/listar`).pipe(catchError(ErrorHandler.handleError));
  }

}