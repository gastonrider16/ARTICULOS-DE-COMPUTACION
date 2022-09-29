import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GaleriaModule } from "./galeria/galeria.module";
import { ImpresorasModule } from "./impresoras/impresoras.module";
import { ComputadorasModule } from "./computadoras/computadoras.module";
import { NavbarprincipalModule } from "./navbarprincipal/navbarprincipal.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    GaleriaModule,
    ImpresorasModule,
    ComputadorasModule,
    NavbarprincipalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
