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
  public imgSrc: string = "https://imgs.search.brave.com/OpbZmlXIAvtaE9bqUSrcx9LTCFUT5NJ3tLqfNLYOBI8/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly8xLmJw/LmJsb2dzcG90LmNv/bS8tMEtxT3JpVkxL/SE0vVzE2TjdHY1gz/a0kvQUFBQUFBQUFy/Slkvd010ZkdiNXV1/UmtiaXVKOUw4UmRL/cjh2VTctZjREY01n/Q0V3WUJoZ0wvczE2/MDAvMjFiJTJCemVi/cmElMkItJTJCSHdh/bmdlLmpwZw";

  public imgTitle: string = "Property Binding";
  constructor() { }

  ngOnInit(): void {
  }

}
