import { Component } from '@angular/core';
import { GreetingComponent } from './greeting/greeting.component'
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports:[CommonModule, RouterOutlet,GreetingComponent,CalculatorComponent],

  templateUrl:'./app.component.html',
  styleUrl:'./app.component.css',
})

export class AppComponent {
  title = 'day7-angular';
}
