import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { log } from 'console';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authServise: AuthService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      // Aquí puedes enviar los datos del formulario a un servidor o hacer otras acciones.
      this.authServise.getUser().subscribe((data) => {
        console.log('data que llega ', data);
      });

      // Portal del cliente
      // Nombre clave	Nombre	Clave API	Creado
      // api-poli-shop	JOSE FERNANDO USUGA FLOREZ	aKh055W4PjWR8ek8ovaSkd	04/11/2023 21:22
    }
  }
}
