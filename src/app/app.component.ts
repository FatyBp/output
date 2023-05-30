import { Component } from '@angular/core';
import { Heroe } from './interfaces/heroeinterface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // public recibeNombre(nombre:string){
  //   console.log(nombre);
  // }
  public heroes(heroes:Heroe){
    console.log(heroes)
  }
}
