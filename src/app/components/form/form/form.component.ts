import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { log } from 'console';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public myModel = ''
  public myMode2 = ''
  public myMode3 = ''
  public height = [/[0-9]/, '.', /[0-9]/, /[0-9]/]
  public Weight = [/[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/]
  public age = [/[0-9]/, /[0-9]/]



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

      var taxaMetabolicaBasal = 66+ (13.5 * peso) + (5*altura)-(6.8 * idade)
    }

    if (sexy = 2) {
      if (nivelTreino = 1) { nivelTreino = 1.56 }
      if (nivelTreino = 2) { nivelTreino = 1.64 }
      if (nivelTreino = 3) { nivelTreino = 1.82 }

      var taxaMetabolicaBasal = 66+ (9.6 * peso) + (1.8*altura)-(4.7 * idade)
    }

    var GET = taxaMetabolicaBasal * nivelTreino

    if (objetivo=1) {
      var percentoPrimeiraSemana = GET * 0.30
      var caloriaPrimeiraSemana = GET - percentoPrimeiraSemana

      var percentoSegundaSemana = GET * 0.36
      var caloriaSegundaSemana = GET - percentoSegundaSemana

      var percentoTerceiraSemana = GET * 0.42
      var caloriaTercaSemana = GET - percentoTerceiraSemana
    }

    if (objetivo=2) {
      var percentoPrimeiraSemana = GET * 0.30
      var caloriaPrimeiraSemana = GET - percentoPrimeiraSemana

      var percentoSegundaSemana = GET * 0.36
      var caloriaSegundaSemana = GET - percentoSegundaSemana

      var percentoTerceiraSemana = GET * 0.42
      var caloriaTercaSemana = GET - percentoTerceiraSemana
    }

    if (objetivo=3) {
      var caloriaPrimeiraSemana = GET * 1.09
      var caloriaSegundaSemana = GET * 1.12
      var caloriaTercaSemana = GET * 1.17
    }


    console.log('caloriaPrimeiraSemana',caloriaPrimeiraSemana)
    console.log('caloriaSegundaSemana',caloriaSegundaSemana)
    console.log('caloriaTercaSemana',caloriaTercaSemana)


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
