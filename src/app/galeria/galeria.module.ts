import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GaleriaComponent } from '../galeria/galeria-component/galeria.component';

@NgModule({
  declarations: [GaleriaComponent],
  exports: [
    GaleriaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GaleriaModule { }
