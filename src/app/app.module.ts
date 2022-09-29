import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GaleriaModule } from "./galeria/galeria.module";
import { ComputadorasComponent } from './computadoras/computadoras-component/computadoras.component';
import { ImpresorasComponent } from './impresoras/impresoras-component/impresoras.component';
import { RouterModule } from "@angular/router";
import { ImpresorasModule } from "./impresoras/impresoras.module";
import { ComputadorasModule } from "./computadoras/computadoras.module";
import {NabvarprincipalModule} from "./nabvarprincipal/nabvarprincipal.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    GaleriaModule,
    ImpresorasModule,
    ComputadorasModule,
    NabvarprincipalModule,
    RouterModule.forRoot([
      {path: 'computadoras', component: ComputadorasComponent},
      {path: 'impresoras', component: ImpresorasComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
