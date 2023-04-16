import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesComponent } from './clientes/clientes.component';
import { ClientesRoutingModule } from './clientes-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ClientesComponent],
  imports: [ReactiveFormsModule, CommonModule, ClientesRoutingModule,FormsModule]
})
export class AdminModule { }
