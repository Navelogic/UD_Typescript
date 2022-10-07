import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pt-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  public nome: string = "Navelogic";
  public idade: number = 20;
  public maisUm: number = 20;

  public checagem: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
