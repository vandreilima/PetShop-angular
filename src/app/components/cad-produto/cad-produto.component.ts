import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Filter } from '../../models/filter'
import { Provider } from '../../models/provider'
import { Product } from '../../models/productcd'
import { CadProductService } from '../../services/cad-product.service'
import { CadFilterService } from '../../services/cad-filter.service'
import { CadProviderService } from '../../services/cad-provider.service'

@Component({
  selector: 'app-cad-produto',
  templateUrl: './cad-produto.component.html',
  styleUrls: ['./cad-produto.component.css']
})
export class CadProdutoComponent implements OnInit {

  product = {} as Product;
  products: Product[]
  filters: Filter[]
  prividers: Provider[]
  nomeProduto: any;
  cadCheck: number;
  lestId:any
  newId: number

  public myModel = ''
  public myMode2 = ''
  public myMode3 = ''
  public price = [ /[0-9]/,/[0-9]/,/[0-9]/, '.', /[0-9]/, /[0-9]/]
  public quantidade = [ /[0-9]/,/[0-9]/,/[0-9]/, '.', /[0-9]/, /[0-9]/]


  constructor(
    private cadProducts: CadProductService,
    private cadFilterApi: CadFilterService,
    private cadProvider: CadProviderService
  ) { }

  ngOnInit() {
    this.getProducts()
    this.getFilters()
    this.getProviders()
  }

  procudtSelect(productId, nameField, typeField, providerField, valueField, ampuntField) {
    this.getProductById(productId, nameField, typeField, providerField, valueField, ampuntField)
  }

  cadastrar(nomeProduto, tipoProduto, fornecedor, valor, quantidade) {
    this.cadProducts
    .getLestIdFilter().subscribe((filterId) => {
      this.lestId = filterId;
      this.newId = this.lestId[0].lestid + 1
    });

    this.product = {
      id: this.newId,
      name: nomeProduto,
      typeProduct: tipoProduto,
      providerProduct: fornecedor,
      amount: quantidade,
      price: valor
    }
    this.cadProduct(this.product)
  }

  getProductById(id: number, nameField, typeField, providerField, valueField, ampuntField) {
    this.cadProducts.getProductById(id).subscribe((product) => {

      this.fillFields(product, nameField, typeField, providerField, valueField, ampuntField)

    })
  }

  deleteProduct(id: number) {
    console.log(id)

    this.cadProducts.getProductById(id).subscribe((product) => {

      this.cadProducts.deleteProduct(product).subscribe(() => {
      });
    });
  }


  cadProduct(product: Product) {
    this.cadCheck = this.products.findIndex(p => p.id === product.id)
    if (this.cadCheck >= 0) {
      this.cadProducts.updateProduct(product).subscribe(() => { });
    } else {
      this.cadProducts.cadProduct(product).subscribe(() => { });
    }
    this.lestId[0].lestid = this.lestId[0].lestid + 1

    this.cadProducts.updateId(this.lestId).subscribe(() => { });

  }

  getProviders() {
    this.cadProvider.getProviders().subscribe((providers: Provider[]) => {
      this.prividers = providers
    })
  }

  getProducts() {
    this.cadProducts.getProducts().subscribe((pruducts: Product[]) => {
      this.products = pruducts;
    });
  }

  getFilters() {
    this.cadFilterApi.getFilters().subscribe((filter: Filter[]) => {
      this.filters = filter;
    });
  }

  fillFields(product, nameField, typeField, providerField, valueField, ampuntField) {
    nameField.value = product.name
    typeField.value = product.typeProduct
    providerField.value = product.providerProduct
    valueField.value = product.price
    ampuntField.value = product.amount
  }

}
