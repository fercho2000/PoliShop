import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeContentComponent } from './home-content/home-content.component';
import { ClientesComponent } from '../admin/clientes/clientes.component';


const routes: Routes = [
  {path : "" , component : HomeContentComponent},
  {path : "inicio" , component : HomeContentComponent},
  {path: "clientes", component: ClientesComponent}
 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeContentRoutingModule { }
