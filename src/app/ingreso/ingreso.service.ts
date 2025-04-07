import { Injectable } from '@angular/core';
import { Ingreso } from './ingreso.model';

@Injectable({
  providedIn: 'root',
})
export class IngresoService {
  ingresos: Ingreso[] = [
    new Ingreso('Salario', 4000),
    new Ingreso('Venta coche', 500),
  ];

  constructor() {}

  eliminar(ingreso: Ingreso) {
    const index = this.ingresos.indexOf(ingreso);

    this.ingresos.splice(index, 1);
  }
}
