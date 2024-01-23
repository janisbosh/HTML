import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdditionComponent } from './addition/addition.component';
import { DivisionComponent } from './division/division.component';
import { HeaderComponent } from './header/header.component';
import { SubtractionComponent } from './subtraction/subtraction.component';

@NgModule({
  declarations: [
    AppComponent,
    AdditionComponent,
    DivisionComponent,
    HeaderComponent,
    SubtractionComponent
  ],
  imports: [CommonModule, FormsModule],
  bootstrap: [AppComponent],
})
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day9-angular';
}
