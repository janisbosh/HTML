import { Component } from '@angular/core';

@Component({
  selector: 'app-addition',
  standalone: true,
  imports: [],
  templateUrl: './addition.component.html',
  styleUrl: './addition.component.css'
})
export class AdditionComponent {

  number1: number = 0;
  number2: number = 0;
  sum: number = 0;

  calculateSum() {
    this.sum = this.number1 + this.number2;
  }
}