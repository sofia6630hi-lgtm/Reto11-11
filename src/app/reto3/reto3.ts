import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reto3',
  imports: [CommonModule, FormsModule],
  templateUrl: './reto3.html',
  styleUrl: './reto3.css'
})
export class reto3 {

  nombre: string = '';
  programa: string = '';
  edad: number | null = null;


  estudiantes: any[] = [];

  registrar() {

    if (this.nombre && this.programa && this.edad) {
      this.estudiantes.push({
        nombre: this.nombre,
        programa: this.programa,
        edad: this.edad
      });

      // Limpiar los campos
      this.nombre = '';
      this.programa = '';
      this.edad = null;
    }
  }
}