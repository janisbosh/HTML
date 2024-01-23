import { Component } from '@angular/core';

@Component({
  selector: 'app-subtraction',
  standalone: true,
  imports: [],
  templateUrl: './subtraction.component.html',
  styleUrl: './subtraction.component.css'
})
export class SubtractionComponent {
  
  number1: number = 0;
  number2: number = 0;
  result: number = 0;

  calculate() {
    this.result = this.number1 - this.number2;
  }
}