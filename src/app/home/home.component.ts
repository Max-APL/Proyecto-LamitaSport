import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  bestSellingProducts: any[] = [
    {
      name: 'Zapatillas de running',
      description: 'Zapatillas ideales para correr largas distancias.',
      price: 99.99,
      imageUrl: 'assets/zapatillas.png'
    },
    {
      name: 'Balón de fútbol',
      description: 'Balón oficial de tamaño reglamentario para jugar al fútbol.',
      price: 24.99,
      imageUrl: 'assets/balon1.png'
    },
    {
      name: 'Camiseta Futbol',
      description: 'Camiseta de futbol del Barcelona.',
      price: 45.00,
      imageUrl: 'assets/camisetaFutbol.png'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }
}

