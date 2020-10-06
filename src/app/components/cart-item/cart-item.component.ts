import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent  {

  constructor(public cartService: CartService) { }

  itens: any

  totalCart:number = 0

  destroy$:Subject<void> = new Subject<void>()

  ngOnDestroy(): void {
    this.destroy$.next()
    this.destroy$.complete()
  }

  ngOnInit() {

      this.cartService.cartUpdate$.pipe(takeUntil(this.destroy$)).subscribe((observable) => {this.calcTotalCart()})
  }

  calcTotalCart() {

    this.itens = this.cartService.getCart()

    this.totalCart = 0

    this.itens.map(iten => {

      this.totalCart = this.totalCart + (iten.price*iten.amountItens)

    })

  }

  plus(item) {

    this.cartService.addAmountIten(item)
  }

  minus(item) {
    this.cartService.removeAmountItem(item)
  }



  removeItem(item) {

    console.log(item)

    this.cartService.removeToCart(item)
  }

}
