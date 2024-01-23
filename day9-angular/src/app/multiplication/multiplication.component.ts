import { Component } from '@angular/core';

@Component({
  selector: 'app-multiplication',
  standalone: true,
  imports: [],
  templateUrl: './multiplication.component.html',
  styleUrl: './multiplication.component.css'
})
export class MultiplicationComponent {

  number1: number = 0;
  number2: number = 0;
  result: number = 0;

  calculate() {
    this.result = this.number1 * this.number2;
  }
}