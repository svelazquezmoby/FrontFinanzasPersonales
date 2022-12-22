import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-ingresar-presupuesto',
  templateUrl: './ingresar-presupuesto.component.html',
  styleUrls: ['./ingresar-presupuesto.component.css']
})
export class IngresarPresupuestoComponent {
cantidad: number;

constructor(private _presupuestoService : PresupuestoService, 
            private router: Router){
this.cantidad=0;
}

agregar(){

  if(this.cantidad >0)
  {
    this._presupuestoService.presupuesto = this.cantidad;
    this._presupuestoService.restante= this.cantidad;
  }
}

}