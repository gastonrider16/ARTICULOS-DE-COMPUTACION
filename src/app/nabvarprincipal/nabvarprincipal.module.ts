import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NabvarprincipalComponent} from "./nabvarprincipal/nabvarprincipal.component";
import {RouterModule, Routes} from '@angular/router';
import {ComputadorasComponent} from "../computadoras/computadoras-component/computadoras.component";
import {ImpresorasComponent} from "../impresoras/impresoras-component/impresoras.component";

const routes: Routes = [
  {path: 'computadoras', component: ComputadorasComponent},
  {path: 'impresoras', component: ImpresorasComponent}];

@NgModule({
  declarations: [NabvarprincipalComponent],
  exports: [
    NabvarprincipalComponent,
    RouterModule
  ],
  imports: [
    [RouterModule.forRoot(routes)],
    CommonModule
  ]
})
export class NabvarprincipalModule { }
