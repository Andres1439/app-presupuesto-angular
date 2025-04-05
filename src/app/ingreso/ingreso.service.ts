import { Injectable } from '@angular/core';
import { Ingreso } from './ingreso.model';

@Injectable({
  providedIn: 'root',
})
export class IngresoService {
  ingresos: Ingreso[] = [
    new Ingreso('Salario', 5000),
    new Ingreso('Venta coche', 15000),
  ];

  constructor() {}
}
