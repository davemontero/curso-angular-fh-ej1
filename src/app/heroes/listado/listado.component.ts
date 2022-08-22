import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Captain America']
  heroesBorrados: string[] = []

  borrarHeroe():void {
    const borrado:string = this.heroes.pop() || ''
    this.heroesBorrados.push(borrado)
  }
}
