import { Component } from '@angular/core';
import {CommonModule, CurrencyPipe} from "@angular/common";

@Component({
  selector: 'app-pedidos',
  standalone: true,
  imports: [
    CurrencyPipe,
    CommonModule
  ],
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.css'
})
export class PedidosComponent {
  pedidos = [
    {
      nombreCliente: 'Juan Pérez',
      fecha: '2024-05-01',
      productos: [
        { nombre: 'Balón de fútbol', cantidad: 2, precio: 25.00 },
        { nombre: 'Raqueta de tenis', cantidad: 1, precio: 100.00 }
      ]
    },
    {
      nombreCliente: 'María García',
      fecha: '2024-05-02',
      productos: [
        { nombre: 'Bicicleta de montaña', cantidad: 1, precio: 300.00 },
        { nombre: 'Casco de bicicleta', cantidad: 1, precio: 50.00 }
      ]
    }
  ];
  // Método para calcular el total de cada pedido
  getTotal(pedido: any): number {
    return pedido.productos.reduce((total: number, producto: any) => {
      return total + producto.precio * producto.cantidad;
    }, 0);
  }
}
