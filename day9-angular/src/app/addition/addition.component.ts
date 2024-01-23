import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-addition',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './addition.component.html',
  styleUrl: './addition.component.css'
})
export class AdditionComponent {

  number1: number;
  number2: number;
  result: number | null;

  constructor() {
    this.number1 = 0;
    this.number2 = 0;
    this.result = null;
  }

  performAddition() {
    this.result = this.number1 + this.number2;
  }
}