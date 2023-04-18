import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeContentComponent } from './home-content/home-content.component';
import { ClientesComponent } from '../admin/clientes/clientes.component';
import { ProveedoresComponent } from '../admin/proveedores/proveedores.component';
import { ProductosComponent } from '../admin/productos/productos.component';


// Relacionamos los componentes creados con el "home" en la constante creado "routes"
const routes: Routes = [
  {path : "" , component : HomeContentComponent},
  {path : "inicio" , component : HomeContentComponent},
  {path: "clientes", component: ClientesComponent},
  {path: "proveedores", component: ProveedoresComponent},
  {path: "productos", component: ProductosComponent},
 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeContentRoutingModule { }
