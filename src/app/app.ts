import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { reto1 } from './reto1/reto1';
import { reto2 } from './reto2/reto2';
import { reto3 } from './reto3/reto3';
import { reto4 } from './reto4/reto4';
import { reto5 } from './reto5/reto5';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, reto1, reto2, reto3, reto4, reto5],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Reto11-11';
}