import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reto5',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reto5.html',
  styleUrl: './reto5.css'
})
export class reto5 {
  nombre = '';
  cantidad: number = 0;
  precio: number = 0;
  inventario: any[] = [];

  agregar() {
    if (this.nombre && this.cantidad >= 0 && this.precio >= 0) {
      this.inventario.push({
        nombre: this.nombre,
        cantidad: this.cantidad,
        precio: this.precio,
        total: this.cantidad * this.precio
      });
      this.nombre = ''; this.cantidad = 0; this.precio = 0;
    }
  }

  eliminar(i: number) {
    this.inventario.splice(i, 1);
  }
}