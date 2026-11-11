import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reto2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reto2.html',
  styleUrl: './reto2.css'
})
export class reto2 {
  productos = [
    { nombre: 'Mouse', categoria: 'Accesorios', precio: 40000 },
    { nombre: 'Teclado', categoria: 'Accesorios', precio: 90000 },
    { nombre: 'Monitor', categoria: 'Tecnología', precio: 450000 },
    { nombre: 'Audífonos', categoria: 'Accesorios', precio: 75000 },
    { nombre: 'Silla Gamer', categoria: 'Hogar', precio: 350000 }
  ];
}