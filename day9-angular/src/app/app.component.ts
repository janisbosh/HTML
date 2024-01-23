import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AdditionComponent } from './addition/addition.component';
import { DivisionComponent } from './division/division.component';
import { HeaderComponent } from './header/header.component';
import { SubtractionComponent } from './subtraction/subtraction.component';
import { MultiplicationComponent } from './multiplication/multiplication.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, AdditionComponent, DivisionComponent, HeaderComponent, SubtractionComponent, RouterOutlet,FormsModule, MultiplicationComponent],
  
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'day9-angular';
}