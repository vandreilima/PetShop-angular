import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cad-fornecedor',
  templateUrl: './cad-fornecedor.component.html',
  styleUrls: ['./cad-fornecedor.component.css']
})
export class CadFornecedorComponent implements OnInit {

  cadastrar(nomeFornecedor, enderecoFornecedor, obeservacaoFornecedor, tipoProduto) {
    alert(nomeFornecedor)

  }

  categoria: any = [
    {
      tipoProduto: "Comida",

    },
    {
      tipoProduto: "Acessorios",

    },
    {
      tipoProduto: "Brinquedos",

    },
    {
      tipoProduto: "Caminhas",

    },
    {
      tipoProduto: "Produtos de Higiene",

    }]


  constructor() { }

  ngOnInit() {
  }

}
