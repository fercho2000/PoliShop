import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  // Portal del cliente
// Nombre clave	Nombre	Clave API	Creado	
// api-poli-shop	JOSE FERNANDO USUGA FLOREZ	aKh055W4PjWR8ek8ovaSkd	04/11/2023 21:22
  getUser() {
    const apiKey = 'aKh055W4PjWR8ek8ovaSkd';
    const email = 'jose@gmail.com';
    const pass='am9zZTEyMw=='; 
    const url = `https://quintadb.com/apps.json?rest_api_key=aKh055W4PjWR8ek8ovaSkd&_filters={"email":"${email}","password":"${pass}"}`;
    return this.http.get(url);
  }
}
