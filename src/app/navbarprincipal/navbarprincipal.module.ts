import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarprincipalComponent} from "./navbarprincipal/navbarprincipal.component";
import {RouterModule, Routes} from '@angular/router';
import {ComputadorasComponent} from "../computadoras/computadoras-component/computadoras.component";
import {ImpresorasComponent} from "../impresoras/impresoras-component/impresoras.component";

const routes: Routes = [
  {path: 'computadoras', component: ComputadorasComponent},
  {path: 'impresoras', component: ImpresorasComponent}];

@NgModule({
  declarations: [NavbarprincipalComponent],
  exports: [
    NavbarprincipalComponent,
    RouterModule
  ],
  imports: [
    [RouterModule.forRoot(routes)],
    CommonModule
  ]
})
export class NavbarprincipalModule { }
