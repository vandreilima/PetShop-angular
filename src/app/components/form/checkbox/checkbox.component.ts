import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css'],
})
export class CheckboxComponent implements OnInit {
  data: any = [];

  index: number;

  months: any = [
    {
      name: 'janeiro',
      numberMonth: 1,
    },
    {
      name: 'Fevereiro',
      numberMonth: 2,
    },
    {
      name: 'Março',
      numberMonth: 3,
    },
    {
      name: 'Abril',
      numberMonth: 4,
    },
    {
      name: 'Maio',
      numberMonth: 5,
    },
    {
      name: 'junho',
      numberMonth: 6,
    },
    {
      name: 'Julho',
      numberMonth: 7,
    },
    {
      name: 'Agosto',
      numberMonth: 8,
    },
    {
      name: 'Setenbto',
      numberMonth: 9,
    },
    {
      name: 'outubro',
      numberMonth: 10,
    },
    {
      name: 'Novembro',
      numberMonth: 11,
    },
    {
      name: 'Dezembro',
      numberMonth: 12,
    },
  ];

  monthChecked(month) {
    let monthNumber: number = parseInt(month.id);
    let monthChecked = month.checked;

    if (monthChecked) {
      this.data.push(monthNumber);
    } else {
      this.index = this.data.findIndex((m) => m === monthNumber);
      this.data.splice(this.index, 1);
      console.log(this.index);
    }

    console.log(this.data);
  }

  constructor() {}

  ngOnInit(): void {}
}
