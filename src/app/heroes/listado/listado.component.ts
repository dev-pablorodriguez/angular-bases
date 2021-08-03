import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitán América'];
  heroeBorrado: string = '';
  // si utilizo el valor de la variable en una expresión booleana, el resultado siempre será falso si contiene alguno de estos valores.
  // heroeBorrado: string = '' || false || null || undefined;

  borrarHeroeFH(): void {
    // utilizando shift para eliminar el primero solamente
    this.heroeBorrado = this.heroes.shift() || '';
  }

  borrarHeroePR(i:number): void {
    this.heroeBorrado = this.heroes[i];

    // utilizando filter
    // this.heroes = this.heroes.filter(heroe => this.heroes.indexOf(heroe) != i);

    // utilizando splice
    this.heroes.splice(i, 1);
  }
}
