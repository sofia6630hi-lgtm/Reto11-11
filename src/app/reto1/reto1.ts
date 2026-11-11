import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reto1',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reto1.html',
  styleUrl: './reto1.css'
})
export class reto1 {
  num1: number = 0;
  num2: number = 0;
  resultado: number = 0;

  sumar() {
    this.resultado = Number(this.num1) + Number(this.num2);
  }

  restar() {
    this.resultado = Number(this.num1) - Number(this.num2);
  }
}