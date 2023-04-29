import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductosServiceService } from './productos-service.service';
import { DetalleProductoComponent } from '../detalle-producto/detalle-producto.component';


const NOMBRE_PRODUCTO: String = 'bbmmoQaSjfWOldQmoYWOiC';
const PRECIO: String = 'c7WQ3cHGHgsAZcRe7dJCod';
const CANTIDAD: String = 'dcJMZdIbjbWRPEW4NdUmkY';
const CATEGORIA: String = 'dcM0K7ub5cNPVdHGBdQmkQ';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css', '../../app.component.css']
})
export class ListaProductosComponent implements OnInit {

  listadoProductos: any;
  categoria: any;


  constructor(private router: ActivatedRoute, private productosService: ProductosServiceService, private route: Router) {

  }

  ngOnInit(): void {

    this.filtrarProdcutos();
    console.log(this.listadoProductos)
  }


  filtrarProdcutos() {

    this.router.paramMap.subscribe(params => {

      this.categoria = this.router.snapshot.paramMap.get('categoria');
      this.productosService.buscarProductos(this.categoria).subscribe((data: any) => {
        this.listadoProductos = data.records;
        console.log(this.listadoProductos)
      });
    })
  }

  onClickProducto(nombre: string) {
    this.route.navigate(['/detalle', nombre])

  }
}
