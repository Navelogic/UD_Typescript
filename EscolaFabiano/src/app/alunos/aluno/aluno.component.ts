import { Component, Input, OnInit } from '@angular/core';
import { Aluno } from './aluno.model';

@Component({
  selector: 'EF-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {
  @Input() aluno!: Aluno;

  constructor() { }

  ngOnInit(): void {
  }

}
