import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-icon-cart',
  templateUrl: './icon-cart.component.html',
  styleUrls: ['./icon-cart.component.css']
})
export class IconCartComponent implements OnInit {


  constructor(public cartService: CartService) { }

  amount: any = 0
  iten: any

  ngOnInit(): void {
 
    this.cartService.cartUpdate$.subscribe((observable) => this.getItens())
  }

  getItens() {
    
  
    this.iten = this.cartService.getCart()
     
    this.amount = this.iten.length


   
  }

}