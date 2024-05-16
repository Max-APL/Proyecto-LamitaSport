import { Component } from '@angular/core';
import {CommonModule, CurrencyPipe} from "@angular/common";


interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string; // Agregamos la propiedad imagen para la URL de la imagen del producto
}
@Component({
  selector: 'app-inventario',
  standalone: true,
  imports: [CommonModule,CurrencyPipe],
  templateUrl: './inventario.component.html',
  styleUrl: './inventario.component.css'
})
export class InventarioComponent {
  categorias: string[] = ['Ropa Deportiva Hombre', 'Ropa Deportiva Mujer', 'Ropa Deportiva Niños', 'Fútbol', 'Baloncesto', 'Voleibol'];
  productosPorCategoria: { [key: string]: Producto[] } = {
    'Ropa Deportiva Hombre': [
      { id: 1, nombre: 'Camiseta de fútbol', descripcion: 'Camiseta para jugar al fútbol', precio: 45.00, imagen: 'assets/camisetaFutbol.png' },
      { id: 2, nombre: 'Pantalón corto de baloncesto', descripcion: 'Pantalón corto para jugar al baloncesto', precio: 25.00, imagen: 'assets/pantalonCorto.png' },
      { id: 3, nombre: 'Calcetines de running', descripcion: 'Calcetines para correr', precio: 10.00, imagen: 'assets/calcetines.png' }
    ],
    'Ropa Deportiva Mujer': [
      { id: 4, nombre: 'Mallas de yoga', descripcion: 'Mallas para practicar yoga', precio: 30.00, imagen: 'assets/mallas.png' },
      { id: 5, nombre: 'Top de entrenamiento', descripcion: 'Top deportivo para entrenar', precio: 15.00, imagen: 'assets/top.png' },
      { id: 6, nombre: 'Sudadera deportiva', descripcion: 'Sudadera cómoda para hacer deporte', precio: 40.00, imagen: 'assets/sudadera.png' }
    ],
    'Ropa Deportiva Niños': [
      { id: 7, nombre: 'Camiseta de fútbol para niños', descripcion: 'Camiseta infantil para jugar al fútbol', precio: 15.00, imagen: 'assets/camisaNino.png' },
      { id: 8, nombre: 'Pantalón corto de baloncesto para niños', descripcion: 'Pantalón corto infantil para jugar al baloncesto', precio: 20.00, imagen: 'assets/pantalonNino.png' },
      { id: 9, nombre: 'Gorra de béisbol para niños', descripcion: 'Gorra infantil para jugar al béisbol', precio: 12.00, imagen: 'assets/gorro.png' }
    ],
    'Fútbol': [
      { id: 10, nombre: 'Balón de fútbol', descripcion: 'Balón oficial de la FIFA', precio: 50.00, imagen: 'assets/balon1.png' },
      { id: 11, nombre: 'Zapatillas de futbol', descripcion: 'Zapatillas para jugar futbol', precio: 80.00, imagen: 'assets/zapatillas.png' },
      { id: 12, nombre: 'Protecciones para portero', descripcion: 'Protecciones para portero de fútbol', precio: 60.00, imagen: 'assets/guantes.png' }
    ],
    'Baloncesto': [
      { id: 13, nombre: 'Balón de baloncesto', descripcion: 'Balón oficial de la NBA', precio: 40.00, imagen: 'assets/balonB.png' },
      { id: 14, nombre: 'Zapatillas de baloncesto', descripcion: 'Zapatillas para jugar baloncesto', precio: 100.00, imagen: 'assets/zapatillasB.png' },
      { id: 15, nombre: 'Tabla de entrenamiento', descripcion: 'Tabla de entrenamiento para baloncesto', precio: 120.00, imagen: 'assets/tablero.png' }
    ],
    'Voleibol': [
      { id: 16, nombre: 'Pelota de voleibol', descripcion: 'Pelota oficial de voleibol', precio: 30.00, imagen: 'assets/balonV.png' },
      { id: 17, nombre: 'Red de voleibol', descripcion: 'Red oficial de voleibol', precio: 70.00, imagen: 'assets/red.png' },
      { id: 18, nombre: 'Zapatillas de voleibol', descripcion: 'Zapatillas para jugar al voleibol', precio: 80.00, imagen: 'assets/zapatillasV.png' }
    ]
  };

  categoriaSeleccionada: string = this.categorias[0];
  productosSeleccionados: Producto[] = this.productosPorCategoria[this.categoriaSeleccionada];

  cambiarCategoria(categoria: string): void {
    this.categoriaSeleccionada = categoria;
    this.productosSeleccionados = this.productosPorCategoria[categoria];
  }

  crearProducto(): void {
    // Aquí puedes agregar la lógica para crear un nuevo producto
    console.log('Crear nuevo producto');
  }
}
