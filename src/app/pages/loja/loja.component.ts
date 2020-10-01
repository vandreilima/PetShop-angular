import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loja',
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.css']
})
export class LojaComponent implements OnInit {

  


  produtos: any = [
    {
      nome: "Pote de ração",
      descricao: "Pote de ração bonito de 450gr.",
      valor: 19.99
    },
    {
      nome: "Casa",
      descricao: "Casinha para cachorro.",
      valor: 19.99
    },
    {
      nome: "Pote de ração",
      descricao: "Pote de ração bonito de 450gr.",
      valor: 19.99
    },
    {
      nome: "Pote de ração",
      descricao: "Pote de ração bonito de 450gr.",
      valor: 19.99
    },
    {
      nome: "Pote de ração",
      descricao: "Pote de ração bonito de 450gr.",
      valor: 19.99
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
