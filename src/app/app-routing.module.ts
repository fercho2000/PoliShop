import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { ClientesComponent } from './feature/admin/clientes/clientes.component';
import { HomeContentComponent } from './feature/home/home-content/home-content.component';

const routes: Routes = [
  {
    path: 'home', component: HomeContentComponent
  },
  {
    path: '**', pathMatch: 'full', redirectTo: 'home'
  },image.png
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
