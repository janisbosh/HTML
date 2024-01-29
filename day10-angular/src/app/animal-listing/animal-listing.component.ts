import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-animal-listing',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './animal-listing.component.html',
  styleUrl: './animal-listing.component.css'
})
export class AnimalListingComponent {

  animalList: Animal[] = [
    {
      name: 'Leo',
      age: 5,
      species: 'Lion',
      imageLink: 'https://miro.medium.com/v2/resize:fit:3840/format:webp/1*QK2mFNC6p-rGUe3t1pMvOw.jpeg'
    },
    {
      name: 'John',
      age: 10,
      species: 'Elephant',
      imageLink: 'https://cdn.britannica.com/02/152302-050-1A984FCB/African-savanna-elephant.jpg'
    },
    {
      name: 'Anna',
      age: 2,
      species: 'Penguin',
      imageLink: 'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/612763581/1800'
    },
    {
      name: 'Peter',
      age: 8,
      species: 'Orca',
      imageLink: 'https://i.natgeofe.com/k/c941b8d1-7a7b-45f1-aacf-299a75058a1f/orca-jumping_square.jpg'
    }
  ];

  orderNumber: number | null = null; ;
  newName: string= '';

  updateAnimalName() {
    if (this.orderNumber !== null && this.orderNumber >= 1 && this.orderNumber <= this.animalList.length) {
     
      this.animalList[this.orderNumber - 1].name = this.newName;
    
      this.orderNumber = null;
      this.newName = '';
    } else {
      alert('Invalid order number.');
    }
  }

  
  constructor() {
    console.log('aaa2');
  }

  ngOnInit(): void {
    console.log('aaa1');
  }

}

export interface Animal {
  name: string;
  age: number;
  species: string;
  imageLink: string;
}