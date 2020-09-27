import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cad-produto',
  templateUrl: './cad-produto.component.html',
  styleUrls: ['./cad-produto.component.css']
})
export class CadProdutoComponent implements OnInit {


  cadastrar(nomeProduto, tipoProduto, fornecedor, valor, qauntidade) {
    alert(nomeProduto)

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


  fornecedores: any = [
    {
      nomeFornecedor: "Tonho Ração",

    },
    {
      nomeFornecedor: "Pedigrre",

    },
    {
      nomeFornecedor: "Tree Dogs",

    },
    {
      nomeFornecedor: "Empatia Copida para pets",

    },
    {
      nomeFornecedor: "Avassalador brinquedos",

    },
  ]


  constructor() { }

  ngOnInit() {
  }

}
