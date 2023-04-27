import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { UserData } from './modelos/user-data';
import { InformacionUsuario } from './modelos/informacion-usuario';

const NOMBRE_CONTRASENIA = 'caxY5bb25cR4oKec3dRSon';
const NOMBRE_PERSONA = 'aFWOJcQWzcW5VdMmk1W4OH';
const NOMBRE_TEL = 'cAn8kHW59cMik6WQZdQ8oK';
const NOMBRE_ROL = 'dcHmkOWPfdViRdRXf7WQPT';
const NOMBRE_CORREO = 'dcKar6B8nmykBcSmoeogqH';
const NOMBRE_DIRECCION = 'ddN8k-fsDmplFcKfFcS1XE';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });
  datosUsuario: UserData;
  informacionUsuario: InformacionUsuario;
  constructor(private authService: AuthService) {
    this.datosUsuario = {
      records: [
        {
          values: {},
        },
      ],
    };

    this.informacionUsuario = {
      nombrePersona: '',
      telefono: '',
      rol: '',
      correo: '',
      direccion: '',
    };
  }

  ngOnInit(): void {}
  get control() {
    return this.loginForm.controls;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);

      this.authService.buscarUsuario(this.loginForm.value).subscribe((data) => {
        this.datosUsuario = data;
        if (this.datosUsuario?.records.length > 0) {
          const record = this.datosUsuario?.records.shift();

          console.log('data que llega ', record);
          console.log(record?.values[NOMBRE_CONTRASENIA]);

 
        }
      });
    }
  }

  organizarInformacionUsuario(record: any){
    this.informacionUsuario = {
      nombrePersona: record?.values[NOMBRE_PERSONA],
      telefono: record?.values[NOMBRE_TEL],
      rol: record?.values[NOMBRE_ROL],
      correo: record?.values[NOMBRE_CORREO],
      direccion: record?.values[NOMBRE_DIRECCION ],
    };
  }
}
