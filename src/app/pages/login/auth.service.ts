import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserData } from '../../shared/modelos/user-data';

const EMAIL: String = 'dcKar6B8nmykBcSmoeogqH';
const TIPO_FILTRO: String = 'is';

@Injectable()
export class AuthService {
  
  private apiUrl =
    'https://quintadb.com/search/bWWO4nW5znWR1Dm3CAbH4Z.json?rest_api_key=aKh055W4PjWR8ek8ovaSkd&entity_id=bdW6_cS8naEOoTW6ddJZCy&view=dcPmkDW4HjWRmomSogW7G-';

  constructor(private http: HttpClient) { }

  buscarUsuario(bodyRquest: any) {
    const requestObject = {
      search: [[{ a: EMAIL, b: bodyRquest.email, o: TIPO_FILTRO }]],
    };
    return this.http.post<UserData>(this.apiUrl, requestObject);
  }

}
