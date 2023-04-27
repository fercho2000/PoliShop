import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserData } from './modelos/user-data';

const EMAIL = 'dcKar6B8nmykBcSmoeogqH';
const TIPO_FILTRO = 'is';

@Injectable()
export class AuthService {
  private apiUrl =
    'https://quintadb.com/search/bWWO4nW5znWR1Dm3CAbH4Z.json?rest_api_key=aKh055W4PjWR8ek8ovaSkd&entity_id=bdW6_cS8naEOoTW6ddJZCy&view=dcPmkDW4HjWRmomSogW7G-';
  private apiKey = 'TU_CLAVE_API';

  constructor(private http: HttpClient) {}
  // tdo agregar validacion de igualacion password
  buscarUsuario(bodyRquest: any) {
    const requestObject = {
      search: [[{ a: EMAIL, b: bodyRquest.email, o: TIPO_FILTRO }]],
    };
    return this.http.post<UserData>(this.apiUrl, requestObject);
  }
  // Portal del cliente
  // Nombre clave	Nombre	Clave API	Creado
  // api-poli-shop	JOSE FERNANDO USUGA FLOREZ	aKh055W4PjWR8ek8ovaSkd	04/11/2023 21:22
  // getUser() {
  //   const apiKey = 'aKh055W4PjWR8ek8ovaSkd';
  //   const email = 'jose@gmail.com';
  //   const pass = 'am9zZTEyMw==';
  //   const url = `https://api.quintadb.com/v1/tables/user/records?api_key=aKh055W4PjWR8ek8ovaSkd&_filters={"email":"${email}","password":"${pass}"}`;
  //   return this.http.get(url);
  // }
}
