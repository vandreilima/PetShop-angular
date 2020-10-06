import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

import {Filter} from '../../models/filter'
import {CadFilterService} from '../../services/cad-filter.service'
@Component({
  selector: 'app-filtro-grid',
  templateUrl: './filtro-grid.component.html',
  styleUrls: ['./filtro-grid.component.css']
})
export class FiltroGridComponent implements OnInit {

  @Output() filterCheck = new EventEmitter()

  filtroEscolhido: number

  filters: Filter[]

  constructor(private cadFilterApi: CadFilterService) { }

  ngOnInit() {
    this.getFilters()
  }

  getFilters() {
    this.cadFilterApi.getFilters().subscribe((filter:Filter[]) => {
      this.filters = filter;
    });
  }



  filtroSelecionado(filtro) {
    this.filtroEscolhido = filtro
    this.filterCheck.emit(this.filtroEscolhido)
  }
  

}
