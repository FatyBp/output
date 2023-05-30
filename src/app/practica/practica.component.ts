import { Component, EventEmitter, Output } from '@angular/core';
import { Heroe } from '../interfaces/heroeinterface';

@Component({
  selector: 'app-practica',
  templateUrl: './practica.component.html',
  styleUrls: ['./practica.component.css']
})
export class PracticaComponent {
  @Output()
  public Informacion : EventEmitter<Heroe> =new EventEmitter();
  public heroe : Heroe[] = [
    {nombre:'Batman', poder: 5000},
    {nombre:'superman', poder: 3000}
  ];
  public enviarInformacion():void{
    this.Informacion.emit(this.heroe[1]);
  }
}
