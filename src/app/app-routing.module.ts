import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeContentComponent } from './pages/home/home-content.component';
import { DetalleProductoComponent } from './pages/detalle-producto/detalle-producto.component';
import { ListaProductosComponent } from './pages/lista-productos/lista-productos.component';
import { ClientesComponent } from './pages/admin/clientes/clientes.component';
import { ProveedoresComponent } from './pages/admin/proveedores/proveedores.component';
import { ProductosComponent } from './pages/admin/productos/productos.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },

  { path: 'home', component: HomeContentComponent },
  { path: 'login', component: LoginComponent },
  { path: 'detalle-producto', component: DetalleProductoComponent },
  { path: 'lista/:categoria', component: ListaProductosComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'proveedores', component: ProveedoresComponent },
  { path: 'productos', component: ProductosComponent },


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }