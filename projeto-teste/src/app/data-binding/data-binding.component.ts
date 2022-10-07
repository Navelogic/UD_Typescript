import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pt-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  public nome: string = "Navelogic";
  public idade: number = 20;
  maisUm: number = 20;

  constructor() { }

  ngOnInit(): void {
  }

}
