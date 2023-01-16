import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  tittle = "CALCULADORA";
  num1: number = 0 ;
  num2: number = 0 ;
  result: number = 0 ;

  add() {
    this.result = this.num1 + this.num2;
  }

  subtract() {
    this.result = this.num1 - this.num2;
  }

  multiply() {
    this.result = this.num1 * this.num2;
  }

  divide() {
    this.result = this.num1 / this.num2;
  }

  constructor() {

  }

  ngOnInit(): void {
  }

}
