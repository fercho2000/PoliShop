import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { InformacionUsuario } from '../../shared/modelos/informacion-usuario';
import { UserData } from '../../shared/modelos/user-data';

const SESION_USUARIO = 'AUTH';
const NOMBRE_CONTRASENIA = 'caxY5bb25cR4oKec3dRSon';
const NOMBRE_PERSONA = 'aFWOJcQWzcW5VdMmk1W4OH';
const NOMBRE_TEL = 'cAn8kHW59cMik6WQZdQ8oK';
const NOMBRE_ROL = 'dcHmkOWPfdViRdRXf7WQPT';
const NOMBRE_CORREO = 'dcKar6B8nmykBcSmoeogqH';
const NOMBRE_DIRECCION = 'ddN8k-fsDmplFcKfFcS1XE';
const NOMBRE_CAMPO_AVATAR = 'bKW53cTCndW7ddOmkii8oR';
const NOMBRE_CAMPO_EDAD = 'ddSCkltHrosykkW7bZW7LQ';
const NOMBRE_CAMPO_FECHA_NAC = 'dcHIDDW4TdNOounCojE8o_';
const NOMBRE_CAMPO_GENERO = 'bigMRcH8nab4onW4zhiCo0';

const MENSAJE_VALIDACION =' el correo o contraseña no son correctos, revisa nuevamente...';
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
  habilitarUsuario: boolean;
  tituloSesion: string;

  mensajeValidacion: string;
  constructor(private authService: AuthService) {
    this.datosUsuario = {
      records: [
        {
          values: {},
        },
      ],
    };

    this.informacionUsuario = {};
    this.habilitarUsuario = false;
    this.mensajeValidacion = '';
    this.tituloSesion = 'Inicio De Sesión';
  }

  ngOnInit(): void {
    this.habilitarSesion();
  }
  get control() {
    return this.loginForm.controls;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.buscarUsuario(this.loginForm.value).subscribe((data) => {
        this.datosUsuario = data;
        const record = this.datosUsuario?.records?.shift();
        this.mensajeValidacion =
          record?.values[NOMBRE_CONTRASENIA] ===
            this.codificacionContrasenia(this.loginForm.value.password)
            ? ''
            : MENSAJE_VALIDACION;
        if (!this.mensajeValidacion) {
          this.organizarInformacionUsuario(record);
          this.habilitarSesion();
        }
      });
    }
  }

  organizarInformacionUsuario(record: any) {
    this.informacionUsuario = {
      urlAvatar: record?.values[NOMBRE_CAMPO_AVATAR],
      nombrePersona: record?.values[NOMBRE_PERSONA],
      telefono: record?.values[NOMBRE_TEL],
      rol: record?.values[NOMBRE_ROL],
      correo: record?.values[NOMBRE_CORREO],
      direccion: record?.values[NOMBRE_DIRECCION],
      edad: record?.values[NOMBRE_CAMPO_EDAD],
      fechaNacimiento: record?.values[NOMBRE_CAMPO_FECHA_NAC],
      genero: record?.values[NOMBRE_CAMPO_GENERO],
    };

    localStorage.setItem(
      SESION_USUARIO,
      JSON.stringify(this.informacionUsuario)
    );
  }

  codificacionContrasenia(valor: any): string {
    return btoa(valor);
  }

  habilitarSesion() {
    const infoUser = localStorage.getItem(SESION_USUARIO);
    if (infoUser) {
      this.habilitarUsuario = true;
      this.tituloSesion = 'Información de Usuario';
      this.informacionUsuario = JSON.parse(infoUser);
    } else {
      this.estadoNormalLogin();
    }
  }
  cerrarSesion() {
    localStorage.clear();
    this.estadoNormalLogin();
  }

  estadoNormalLogin() {
    this.habilitarUsuario = false;
    this.tituloSesion = 'Inicio De Sesión';
  }
}
