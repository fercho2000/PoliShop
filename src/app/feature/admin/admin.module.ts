import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesComponent } from './clientes/clientes.component';
import { ClientesRoutingModule } from './clientes-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
// import { AuthService } from './auth.service';

@NgModule({
  declarations: [ClientesComponent],
  imports: [ReactiveFormsModule, CommonModule, ClientesRoutingModule],
  // providers: [AuthService],
})
export class AdminModule {}
