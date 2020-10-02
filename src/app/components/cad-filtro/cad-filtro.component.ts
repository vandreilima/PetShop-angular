import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Filter} from '../../models/filter'
import {CadFilterService} from '../../services/cad-filter.service'

@Component({
  selector: 'app-cad-filtro',
  templateUrl: './cad-filtro.component.html',
  styleUrls: ['./cad-filtro.component.css']
})
export class CadFiltroComponent implements OnInit {

  filter = {} as Filter;
  filters: Filter[]

  constructor(private cadFilterApi: CadFilterService) { }

  ngOnInit() {
    this.getFilters()
  }

  cadastrar(nameFilter, UnidadeMedida) {
    
    this.filter = {
      id: 46 + nameFilter.length,
      name:nameFilter,
      un:UnidadeMedida
    }
    this.cadFilters(this.filter)
  }

  cadFilters(filter:Filter) {
    this.cadFilterApi.cadFilter(filter).subscribe(() => {});
  }

  getFilters() {
    this.cadFilterApi.getFilters().subscribe((filter:Filter[]) => {
      this.filters = filter;
    });
  }


  un: any = [
  { name: "KG"},
    { name: "Litro"},
    { name: "Grama"},
    { name: "Peça"},
    { name: "Quantidade",}
  ]
}
