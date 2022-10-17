import { Aluno } from "./aluno/aluno.model";
import { ESCOLA_FABIANO_API } from "../app.api";
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable()
export class AlunosService {
  alunos: Aluno[] = [];

  constructor(private http: HttpClient) {}

  listarAlunos(): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(`${ESCOLA_FABIANO_API}/aluno/listar`)
  }

}