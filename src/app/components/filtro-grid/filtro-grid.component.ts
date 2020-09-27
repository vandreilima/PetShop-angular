import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filtro-grid',
  templateUrl: './filtro-grid.component.html',
  styleUrls: ['./filtro-grid.component.css']
})
export class FiltroGridComponent implements OnInit {




  filtroEscolhido: string = ''

  filtros: any = [
    {
      nomeFiltro: "Comida",

    },
    {
      nomeFiltro: "Acessorios",

    },
    {
      nomeFiltro: "Brinquedos",

    },
    {
      nomeFiltro: "Caminhas",

    },
    {
      nomeFiltro: "Produtos de Higiene",

    },

  ]


  filtroSelecionado(filtro) {
    this.filtroEscolhido = filtro

  }


  constructor() { }

  ngOnInit() {
  }

}
