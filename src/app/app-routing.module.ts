import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeContentComponent } from './pages/home/home-content.component';
import { DetalleProductoComponent } from './pages/detalle-producto/detalle-producto.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },

  { path: 'home', component: HomeContentComponent },
  { path: 'login', component: LoginComponent },
  { path: 'detalle-producto', component: DetalleProductoComponent }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }