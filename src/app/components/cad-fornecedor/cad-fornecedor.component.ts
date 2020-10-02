import { Component, OnInit } from '@angular/core';

import {Filter} from '../../models/filter'
import {Provider} from '../../models/provider'
import {CadFilterService} from '../../services/cad-filter.service'
import {CadProviderService} from '../../services/cad-provider.service'
@Component({
  selector: 'app-cad-fornecedor',
  templateUrl: './cad-fornecedor.component.html',
  styleUrls: ['./cad-fornecedor.component.css']
})
export class CadFornecedorComponent implements OnInit {

  provider: any = {}
  Providers: Provider[]

  filters: Filter[]

  constructor(private cadFilterApi: CadFilterService,private cadProviderApi: CadProviderService ) { }

  ngOnInit() {
    this.getFilters()
    this.getProviders()
  }


  getFilters() {
    this.cadFilterApi.getFilters().subscribe((filter:Filter[]) => {
      this.filters = filter;
      });
  }

  getProviders() {
    this.cadProviderApi.getProviders().subscribe((priveders:Provider[]) => {
      this.Providers = priveders
    })
  }

  cadProvider(privider:Provider) {
    this.cadProviderApi.cadProvider(privider).subscribe(() =>{})
  }


  cadastrar(nameProvider, streetProvider, obeservacaoFornecedor, typeProduct) {
     this.provider = {
       id: 45+nameProvider.length,
       name: nameProvider,
       street:streetProvider,
       obs:obeservacaoFornecedor,
      typeProduct:typeProduct
     }

     this.cadProvider(this.provider)
  }

  

}
