import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gird-card',
  templateUrl: './gird-card.component.html',
  styleUrls: ['./gird-card.component.css']
})
export class GirdCardComponent implements OnInit {

  constructor() { }

  @Input() nomeProduto: string = '';
  @Input() descricaoProduto: string = '';
  @Input() valorProduto: string = '';

  ngOnInit() {
  }

}
