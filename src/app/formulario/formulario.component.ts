import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  operandoA: number = 0;
  operandoB: number = 0;

  sumar():void{
   // this.resultado = this.operandoA + this.operandoB;
  }
}
