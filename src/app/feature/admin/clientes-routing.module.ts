import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesComponent } from './clientes/clientes.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {path : "" , component : ClientesComponent},
  {path : "clientes" , component : ClientesComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes),FormsModule],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
