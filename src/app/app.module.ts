import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GaleriaModule } from "./galeria/galeria.module";
import { ImpresorasModule } from "./impresoras/impresoras.module";
import { ComputadorasModule } from "./computadoras/computadoras.module";
import { NabvarprincipalModule } from "./nabvarprincipal/nabvarprincipal.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    GaleriaModule,
    ImpresorasModule,
    ComputadorasModule,
    NabvarprincipalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
