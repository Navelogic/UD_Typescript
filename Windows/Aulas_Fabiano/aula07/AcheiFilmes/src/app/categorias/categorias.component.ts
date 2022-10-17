import { Component, OnInit } from '@angular/core';
import { Categoria } from './categoria/categoria.model';
import { CategoriasService } from './categorias.service';

@Component({
  selector: 'af-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  categorias!: Categoria[];

  constructor(private categoriasService: CategoriasService) { }

  ngOnInit(): void {
    this.categoriasService.listarCategorias().subscribe(categorias => this.categorias = categorias);
  }

}
