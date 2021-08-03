import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    exports: [
        ListadoComponent
    ],
    imports: [
        // usualmente aquí solamente se importan módulos
        CommonModule//proporciona directivas como ngIf y ngFor, entre otras
    ]
})
export class HeroesModule {

}