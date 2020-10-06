import { CartService } from './../../services/cart.service';
import { Component, Injectable, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gird-card',
  templateUrl: './gird-card.component.html',
  styleUrls: ['./gird-card.component.css']
})

@Injectable({ providedIn: 'root' })

export class GirdCardComponent implements OnInit {

  constructor(private cartService: CartService) { }

  @Input() product:any = {}
  @Input() nomeProduto: string = '';
  @Input() descricaoProduto: string = '';
  @Input() valorProduto: string = '';

  ngOnInit() {
  }

  addTocard() {
    this.cartService.addToCart(this.product)
  }

}
