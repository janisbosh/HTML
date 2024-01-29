import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-animal-listing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './animal-listing.component.html',
  styleUrl: './animal-listing.component.css'
})
export class AnimalListingComponent implements OnInit {

  animalList: Animal[] = [
    {
      name: 'Lion',
      age: 5,
      species: 'Cat',
      imageLink: 'https://miro.medium.com/v2/resize:fit:3840/format:webp/1*QK2mFNC6p-rGUe3t1pMvOw.jpeg'
    },
    {
      name: 'Elephant',
      age: 10,
      species: 'African Savanna',
      imageLink: 'https://cdn.britannica.com/02/152302-050-1A984FCB/African-savanna-elephant.jpg'
    },
    {
      name: 'Penguin',
      age: 2,
      species: 'King penguin',
      imageLink: 'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/612763581/1800'
    },
    {
      name: 'Dolphin',
      age: 8,
      species: 'Orca',
      imageLink: 'https://i.natgeofe.com/k/c941b8d1-7a7b-45f1-aacf-299a75058a1f/orca-jumping_square.jpg'
    }
  ];

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