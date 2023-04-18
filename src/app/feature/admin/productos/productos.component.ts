//Los comentarios del componente "Clientes" aplican igual


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {

  title:string = 'poliShop_Productos';
  msg:string = ''; 

  products = [
    {'code': '001','product': 'Vino blanco','price': '$90.000.00', 'stock': '20'},
    {'code': '002','product': 'Arvejas 500g','price': '$14.000.00', 'stock': '10'},
    {'code': '003','product': 'Solomo 500g','price': '$30.000.00', 'stock': '15'},
    {'code': '004','product': 'Uva 500g','price': '$20.000.00', 'stock': '12'},

  ];

  model:any = {}; 
  model2:any = {};
  myValue!: number; 
  hideUpdate:boolean  = true; 

  addProduct():void {
    this.products.push(this.model);
    this.msg = 'Campo agregado';   
  }

  deleteProduct(i:number):void {
     let answer = confirm('¿Esta seguro de eliminarlo?'); 
     if(answer){
      this.products.splice(i , 1);
      this.msg = 'Campo eliminado';  
     }
  }

  updateProduct():void {
    let i = this.myValue; 
    for(let j=0; j<this.products.length; j++){
      if(i == j){
        this.products[i] = this.model2; 
        this.model2 = {}; 
        this.msg = 'Campo actualizado'
        this.hideUpdate = true;
      }
    }
  }

  editProduct(i:number) {
    this.hideUpdate = false; 
    this.model2.product = this.products[i].product;
    this.model2.price = this.products[i].price;
    this.model2.stock = this.products[i].stock;
    this.myValue = i; 
  }

  closeAlert():void{
    this.msg = ''; 
  }

}
