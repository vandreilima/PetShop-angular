import { Component, OnInit } from '@angular/core';

import { Filter } from '../../models/filter'
import { Provider } from '../../models/provider'
import { CadFilterService } from '../../services/cad-filter.service'
import { CadProviderService } from '../../services/cad-provider.service'
@Component({
  selector: 'app-cad-fornecedor',
  templateUrl: './cad-fornecedor.component.html',
  styleUrls: ['./cad-fornecedor.component.css']
})
export class CadFornecedorComponent implements OnInit {

  provider: any = {}
  Providers: Provider[]
  cadCheck: any
  filters: Filter[]
  lestId:any
  newId: number

  constructor(private cadFilterApi: CadFilterService, private cadProviderApi: CadProviderService) { }

  ngOnInit() {
    this.getFilters()
    this.getProviders()
  }

  getFilters() {
    this.cadFilterApi.getFilters().subscribe((filter: Filter[]) => {
      this.filters = filter;
    });
  }

  getProviders() {
    this.cadProviderApi.getProviders().subscribe((priveders: Provider[]) => {
      this.Providers = priveders
    })
  }

  cadProvider(privider: Provider) {
    this.cadCheck = this.Providers.findIndex(p => p.id === privider.id)
    if (this.cadCheck >= 0) {
      this.cadProviderApi.updateProvider(privider).subscribe(() => { });
    } else {
      this.cadProviderApi.cadProvider(privider).subscribe(() => { });
    }

    this.lestId[0].lestid = this.lestId[0].lestid + 1

    this.cadProviderApi.updateId(this.lestId).subscribe(() => { });

  }

  getProviderById(id: number, nameProvider, addressProvider, obs, typeProduct) {

    this.cadProviderApi.getProviderById(id).subscribe(provider => {

      this.fillField(provider, nameProvider, addressProvider, obs, typeProduct)
    })
  }

  deleteProvider(id) {
    this.cadProviderApi.deleteProvider(id).subscribe()
  }

  providerSelect(id, nameProvider, addressProvider, obs, typeProduct) {

    this.getProviderById(id, nameProvider, addressProvider, obs, typeProduct)
  }

  fillField(provider, nameProvider, addressProvider, obs, typeProduct) {

    nameProvider.value = provider.name
    addressProvider.value = provider.street
    obs.value = provider.obs
    typeProduct.value = provider.typeProduct
  }

  cadastrar(nameProvider, streetProvider, obeservacaoFornecedor, typeProduct) {
    this.cadProviderApi
    .getLestIdFilter().subscribe((filterId) => {
      this.lestId = filterId;
      this.newId = this.lestId[0].lestid + 1
    });

    this.provider = {
      id: this.newId,
      name: nameProvider,
      street: streetProvider,
      obs: obeservacaoFornecedor,
      typeProduct: typeProduct
    }
    this.cadProvider(this.provider)
  }
}
