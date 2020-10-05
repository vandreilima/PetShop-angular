import { Cart } from './../models/cart';
import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({

  providedIn: 'root'
})
export class CartService implements OnDestroy {

  cartUpdate$:Subject<any> = new Subject<any>()
  destroy$:Subject<void> = new Subject<void>()

  cart: any = []
  products: any = []
  amount: any = {}
  idIten: any

  constructor() { }
  ngOnDestroy(): void {
    this.destroy$.next()
    this.destroy$.complete()
  }

  addToCart(product: any) {
    
      this.idIten = this.cart.findIndex(p => p.id === product.id)
      if (this.idIten >= 0) {
        this.cart[this.idIten].amountItens = this.cart[this.idIten].amountItens +1
      } else {
        product.amountItens =1
        this.cart.push(product)
      }

      this.cartUpdate$.next(true)
  }

  removeToCart(product) {
    this.idIten = this.cart.findIndex(p => p.id === product.id)
    this.cart.splice(this.idIten,1)
    this.cartUpdate$.next(true)
  }

  addAmountIten(product: any) {
    this.idIten = this.cart.findIndex(p => p.id === product.id)
    this.cart[this.idIten].amountItens = this.cart[this.idIten].amountItens +1

  }

  removeAmountItem(product: any) {
    this.idIten = this.cart.findIndex(p => p.id === product.id)

    if(this.cart[this.idIten].amountItens <= 1) {
      return alert('Quantidade Minima, Remova o Item Caso Desajado')
    }

    this.cart[this.idIten].amountItens = this.cart[this.idIten].amountItens -1
  }

  getCart() {
    return this.cart
  }

}
