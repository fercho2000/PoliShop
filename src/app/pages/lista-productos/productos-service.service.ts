import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const CATEGORIA: String = 'dcM0K7ub5cNPVdHGBdQmkQ';
const NOMBRE_PRODUCTO: String = 'ddOrDYWQrcVOoqamoIg8kQ';
const TIPO_FILTRO: String = 'is';
const URL = 'https://quintadb.com/search/bWWO4nW5znWR1Dm3CAbH4Z.json?rest_api_key=aKh055W4PjWR8ek8ovaSkd&entity_id=czW7ddOSnbW6ddGc_dH01u&view=c4W4pcOCnnW5ToWQH3W7ab%27';

@Injectable({
  providedIn: 'root'
})
export class ProductosServiceService {

  constructor(private http: HttpClient) { }

  encontrarProducto(producto: string): Observable<any> {

    let body = {
      search: [[{ a: NOMBRE_PRODUCTO, b: producto, o: TIPO_FILTRO }]]
    }
    return this.http.post<any>(URL, body);
  }

  buscarProductos(categoria: string): Observable<any> {

    let body = {
      search: [[{ a: CATEGORIA, b: categoria, o: TIPO_FILTRO }]]
    }
    return this.http.post<any>(URL, body);

  }

}
