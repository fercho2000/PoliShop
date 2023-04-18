import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { ClientesComponent } from './feature/admin/clientes/clientes.component';
import { HomeContentComponent } from './pages/home/home-content/home-content.component';
import { ProveedoresComponent } from './feature/admin/proveedores/proveedores.component';
import { ProductosComponent } from './feature/admin/productos/productos.component';

// Creamos una constante "routes" y accedemos al metodo "Routes" de Angular para
// comunicar todos los demas componentes con el "home"
const routes: Routes = [
  {
    path: 'home', component: HomeContentComponent
  },
  {
    path: '**', pathMatch: 'full', redirectTo: 'home'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
