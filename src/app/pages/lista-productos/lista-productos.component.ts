import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosServiceService } from './productos-service.service';


const NOMBRE_PRODUCTO: String = 'bbmmoQaSjfWOldQmoYWOiC';
const PRECIO: String = 'c7WQ3cHGHgsAZcRe7dJCod';
const CANTIDAD: String = 'dcJMZdIbjbWRPEW4NdUmkY';
const CATEGORIA: String = 'dcM0K7ub5cNPVdHGBdQmkQ';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  listadoProductos: any;
  categoria: any;


  constructor(private router: ActivatedRoute, private productosService: ProductosServiceService) {

  }

  ngOnInit(): void {

    this.filtrarProdcutos();
  }



  filtrarProdcutos() {

    this.router.paramMap.subscribe(params => {

      this.categoria = this.router.snapshot.paramMap.get('categoria');
      this.productosService.buscarProductos(this.categoria).subscribe((data: any) => {
        this.listadoProductos = data.records;
        console.log(this.listadoProductos)
      });
      console.log(this.categoria)
    })

  }
}
