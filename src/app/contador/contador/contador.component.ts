import { Component } from '@angular/core'

@Component({
    selector: 'app-contador',
    template: `
        <!-- <h1>Hola Mundo</h1> -->
        <h1>{{ titulo }}</h1>
        <h3>El factor es: <strong>{{ factor }}</strong></h3>

        <!-- los paréntesis indican eventos html -->
        <!-- dentro de las comillas puedo escribir expresiones JS -->
        <!-- <button (click)="contador = contador + 1;">+1</button> -->
        <!-- <button (click)="incrementar()">+1 fnc</button> -->
        <button (click)="acumular(factor)">+{{ factor }}</button>

        <span>{{ contador }}</span>

        <!-- <button (click)="contador = contador - 1;">-1</button> -->
        <!-- <button (click)="decrementar()">-1 fnc</button> -->
        <button (click)="acumular(-factor)">-{{ factor }}</button>

    `
})

export class ContadorComponent{
    public titulo: string = 'Contador App';
    public contador: number = 10;
    public factor: number = 5;
  
    incrementar(): void{
      this.contador++;
    }
  
    decrementar(): void{
      this.contador--;
    }
  
    acumular(valor: number): void{
      this.contador += valor;
    }
}