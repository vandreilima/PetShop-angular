import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public myModel = ''
  public myMode2 = ''
  public myMode3 = ''
  public height = [/\d/, '.', /\d/, /\d/]
  public Weight = [/\d/, /\d/, /\d/, '.', /\d/, /\d/]
  public age = [/\d/, /\d/]

  caloriaPrimeiraMes: number
  caloriaSegundoMes: number
  caloriaTerceiroMes: number

  forme: FormGroup

  calc() {
    var altura = this.forme.value.height
    var peso = this.forme.value.Weight
    var idade = this.forme.value.age
    var sexy = this.forme.value.sexy
    var nivelTreino = this.forme.value.optionTreine
    var objetivo = this.forme.value.objective

    if (sexy = 1) {
      if (nivelTreino = 1) { nivelTreino = 1.55 }
      if (nivelTreino = 2) { nivelTreino = 1.78 }
      if (nivelTreino = 3) { nivelTreino = 2.10 }

      var taxaMetabolicaBasal = 66 + (13.5 * peso) + (5 * altura) - (6.8 * idade)
    }

    if (sexy = 2) {
      if (nivelTreino = 1) { nivelTreino = 1.56 }
      if (nivelTreino = 2) { nivelTreino = 1.64 }
      if (nivelTreino = 3) { nivelTreino = 1.82 }

      var taxaMetabolicaBasal = 66 + (9.6 * peso) + (1.8 * altura) - (4.7 * idade)
    }

    var GET = taxaMetabolicaBasal * nivelTreino

    if (objetivo = 1) {
      var percentoPrimeiraMes = GET * 0.30
      this.caloriaPrimeiraMes = GET - percentoPrimeiraMes

      var percentoSegundaMes = GET * 0.36
      this.caloriaSegundoMes = GET - percentoSegundaMes

      var percentoTerceiraMes = GET * 0.42
      this.caloriaTerceiroMes = GET - percentoTerceiraMes
    }

    if (objetivo = 2) {
      var percentoPrimeiraMes = GET * 0.30
      this.caloriaPrimeiraMes = GET - percentoPrimeiraMes

      var percentoSegundaMes = GET * 0.36
      this.caloriaSegundoMes = GET - percentoSegundaMes

      var percentoTerceiraMes = GET * 0.42
      this.caloriaTerceiroMes = GET - percentoTerceiraMes
    }

    if (objetivo = 3) {
      this.caloriaPrimeiraMes = GET * 1.09
      this.caloriaSegundoMes = GET * 1.12
      this.caloriaTerceiroMes = GET * 1.17
    }
  }

  constructor(private formBuilder: FormBuilder) { }
  ngOnInit(): void {

    this.forme = this.formBuilder.group({
      height: [null],
      Weight: [null],
      age: [null],
      sexy: ["Sexo Biologico"],
      optionTreine: ["Nivel de Intensidade de Treino"],
      objective: ["Objetivo"],
    })
  }

  optionTreiner = [
    {
      id: 1,
      name: 'leve - 1-3 dias/semanas'
    },
    {
      id: 2,
      name: 'moderada - 3-5 dias/semanas'
    },
    {
      id: 3,
      name: 'intensa - 6-7 dias/semanas'
    },
  ]

  sexys = [
    {
      id: 1,
      name: "Masculino",
    },
    {
      id: 2,
      name: "Femenino",
    }
  ]

  objetives = [
    {
      id: 1,
      name: 'Perder Peso'
    },
    {
      id: 2,
      name: 'Manter Peso'
    },
    {
      id: 3,
      name: 'Ganhar Peso'
    },
  ]

}
