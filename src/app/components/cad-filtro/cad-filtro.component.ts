import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Filter } from '../../models/filter'
import { CadFilterService } from '../../services/cad-filter.service'

@Component({
  selector: 'app-cad-filtro',
  templateUrl: './cad-filtro.component.html',
  styleUrls: ['./cad-filtro.component.css']
})
export class CadFiltroComponent implements OnInit {

  filter = {} as Filter;
  filters: Filter[]
  cadCheck: number;

  constructor(private cadFilterApi: CadFilterService) { }

  ngOnInit() {
    this.getFilters()
  }

  cadastrar(nameFilter, UnidadeMedida) {

    this.filter = {
      id: 46 + nameFilter.length,
      name: nameFilter,
      un: UnidadeMedida
    }
    this.cadFilters(this.filter)
  }

  deleteProduct(id: number) {
    console.log(id)

    this.cadFilterApi.getFilterById(id).subscribe((filter) => {

      this.cadFilterApi.deleteFilter(filter).subscribe(() => {
      });
    });
  }

  cadFilters(filter: Filter) {

    this.cadCheck = this.filters.findIndex(p => p.id === filter.id)

    alert(this.cadCheck)

    if (this.cadCheck >= 0) {
      this.cadFilterApi.updateFilter(filter).subscribe(() => { });
      alert(1)
    } else {
      alert(2)
      this.cadFilterApi.cadFilter(filter).subscribe(() => { });
    }


  }

  getFilters() {
    this.cadFilterApi.getFilters().subscribe((filter: Filter[]) => {
      this.filters = filter;
    });
  }

  getFilterById(id: number, categoria, unidadeMedida) {
    this.cadFilterApi.getFilterById(id).subscribe((filter => {
      this.fillFields(filter, categoria, unidadeMedida)
    }))
  }

  filterSelect(id, categoria, unidadeMedida) {
    this.getFilterById(id, categoria, unidadeMedida)
  }

  fillFields(filter, categoria, unidadeMedida) {

    categoria.value = filter.name
    unidadeMedida.value = filter.un
  }


  un: any = [
    { name: "KG" },
    { name: "Litro" },
    { name: "Grama" },
    { name: "Peça" },
    { name: "Quantidade", }
  ]
}
