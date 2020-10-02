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
  
    this.type = filter
    console.log(this.products)
  }




}
