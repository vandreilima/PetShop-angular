import { Component, OnInit, ViewChild } from '@angular/core';

import { Product } from '../../models/productcd'
import { CadProductService } from '../../services/cad-product.service'

@Component({
  selector: 'app-loja',
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.css']
})
export class LojaComponent implements OnInit {

  products: Product[]
  productsSelect: Product[]
  type: string = ''

  filterCheck: any = ''

  constructor(private cadProducts: CadProductService) { }

  ngOnInit() {
    this.getProducts()
  }

  getProducts() {
    this.cadProducts.getProducts().subscribe((pruduct: Product[]) => {
      this.products = pruduct;
    });
  }

  filterChecked(filter) {

    this.getProducts()

    this.type = filter

    console.log(1, this.products)

    var product = this.products.map(product => {
      if (product.typeProduct !== filter) {
        this.products.splice(this.products.indexOf(product), 1)
      }
    })
    console.log(2, this.products)

    this.productsSelect = []

    this.productsSelect = this.products
  }
}
