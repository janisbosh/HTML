import { Component } from '@angular/core';
import { Routes } from '@angular/router';

import { AdditionComponent } from './addition/addition.component';
import { DivisionComponent } from './division/division.component';
import { MultiplicationComponent } from './multiplication/multiplication.component';
import { SubtractionComponent } from './subtraction/subtraction.component';

export const routes: Routes = [
{ path: 'addition', component: AdditionComponent },
{ path: 'subtraction', component: SubtractionComponent },
{ path: 'multiplication', component: MultiplicationComponent },
{ path: 'division', component: DivisionComponent },

];