import { Component, Input, OnInit } from '@angular/core';
import { Estudante } from './estudante.model';

@Component({
  selector: 'AA6-estudantes',
  templateUrl: './estudantes.component.html',
  styleUrls: ['./estudantes.component.css']
})
export class EstudantesComponent implements OnInit {
  @Input() estudante: Estudante;
  

  constructor() { }

  ngOnInit(): void {
  }

}
