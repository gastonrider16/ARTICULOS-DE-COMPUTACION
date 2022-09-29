import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ComputadorasComponent} from "./computadoras/computadoras-component/computadoras.component";
import {ImpresorasComponent} from "./impresoras/impresoras-component/impresoras.component";

const routes: Routes = []

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
