import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {
// definimos propiedad que nos ayuda a emitir informacion
@Output()
public emitirInformacion : EventEmitter<string>= new EventEmitter();
// definimos la propiedad que contiene la inormacion a emitir
public nombre:string ="hola desde el hijo";
// defninimos el metodo que emite la informacion
public enviarInformacion():void{
  this.emitirInformacion.emit(this.nombre);
}
}
