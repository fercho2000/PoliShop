import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeContentModule } from './feature/home/home-content.module';
import { LoginModule } from './feature/login/login.module';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { CoreModule } from './core';
import { ClientesComponent } from './feature/admin/clientes/clientes.component';
import { ProveedoresComponent } from './feature/admin/proveedores/proveedores.component';
import { FormsModule } from '@angular/forms';
import { HomeContentComponent } from './feature/home/home-content/home-content.component';
import { ProductosComponent } from './feature/admin/productos/productos.component';


// Declaramos todos los componentes que creamos
@NgModule({
  declarations: [
    AppComponent,
    HomeContentComponent,
    PageNotFoundComponent,
    ClientesComponent,
    ProveedoresComponent,
    ProductosComponent

    
  ],

  // Importamos los módulos creados y el módulo "FormsModule"
  imports: [
    BrowserModule,
    CoreModule,
    HomeContentModule,
    LoginModule,
    AppRoutingModule,
    FormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
