import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cad-filtro',
  templateUrl: './cad-filtro.component.html',
  styleUrls: ['./cad-filtro.component.css']
})
export class CadFiltroComponent implements OnInit {


  cadastrar(nomeCategoria, UnidadeMedida) {
    alert(nomeCategoria)
  }

  unidadeMedida: any = [
    { unidadeMedida: "KG" },
    { unidadeMedida: "Litro" },
    { unidadeMedida: "Grama" },
    { unidadeMedida: "Peça" },
    { unidadeMedida: "Quantidade" }
  ]

  constructor() { }

  ngOnInit() {
  }

}
