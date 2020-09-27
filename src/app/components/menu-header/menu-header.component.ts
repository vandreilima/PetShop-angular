import { CadFiltroComponent } from './../cad-filtro/cad-filtro.component';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.css'],


})
export class MenuHeaderComponent implements OnInit {

  opened: boolean = false

  filtroEscolhido: string = ""

  filtroSelecionado(filtro) {

    this.filtroEscolhido = filtro

  }


  abrir() {
    this.opened = !this.opened;
  }

  constructor() { }

  ngOnInit() {
  }

}
