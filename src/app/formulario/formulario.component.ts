import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Ingreso } from '../ingreso/ingreso.model';
import { IngresoService } from '../ingreso/ingreso.service';
import { EgresoService } from '../egreso/egreso.service';
import { Egreso } from '../egreso/egreso.model';

@Component({
  selector: 'app-formulario',
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent {
  tipo: string = 'ingresoOperacion';

  constructor(
    private ingresoServicio: IngresoService,
    private egresoService: EgresoService
  ) {}

  // Definimos los input del formulario
  descripcionInput: string | null = null;
  valorInput: number | null = null;

  tipoOperacion(evento: Event) {
    const elementoSelect = evento.target as HTMLSelectElement;
    this.tipo = elementoSelect.value;
  }

  agregarValor() {
    if (this.descripcionInput != null && this.valorInput != null) {
      if (this.tipo === 'ingresoOperacion') {
        this.ingresoServicio.ingresos.push(
          new Ingreso(this.descripcionInput, this.valorInput)
        );
      } else {
        this.egresoService.egresos.push(
          new Egreso(this.descripcionInput, this.valorInput)
        );
      }
    } else {
      console.log('Introduzca un valor válido');
    }

    // Limpiar los formularios

    this.descripcionInput = null;
    this.valorInput = null;
  }
}
