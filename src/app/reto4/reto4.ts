import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reto4',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reto4.html',
  styleUrl: './reto4.css'
})
export class reto4 {
  color: string = '';     
  mensaje: string = '';   
  hacerRojo() {
    this.color = 'red';
    this.mensaje = 'Detenerse';
  }

  hacerAmarillo() {
    this.color = 'yellow';
    this.mensaje = 'Precaución';
  }

  hacerVerde() {
    this.color = 'green';
    this.mensaje = 'Avanzar';
  }
}