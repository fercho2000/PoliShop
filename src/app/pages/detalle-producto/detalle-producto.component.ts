import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosServiceService } from '../lista-productos/productos-service.service';


@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css', '../../app.component.css']
})
export class DetalleProductoComponent implements OnInit {

  producto: any;
  productoInfo: any;

  constructor(private router: ActivatedRoute, private productosService: ProductosServiceService) {

    this.productoInfo = this.buscarInfoProducto()
  }

  ngOnInit(): void {

    this.producto = this.router.snapshot.paramMap.get('nombre');
    this.buscarInfoProducto();

  }


  buscarInfoProducto() {

    this.productosService.encontrarProducto(this.producto).subscribe((data: any) => {
      return data.records;
    });
  }




}



