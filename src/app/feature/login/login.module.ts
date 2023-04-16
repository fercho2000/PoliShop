import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LoginRoutingModule } from './login-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { ClientesRoutingModule } from '../admin/clientes-routing.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [ReactiveFormsModule, CommonModule, LoginRoutingModule,ClientesRoutingModule],
  providers: [AuthService],
})
export class LoginModule {}
