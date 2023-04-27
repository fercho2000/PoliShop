import { SharedModule } from './shared/shared.module';
import { AuthService } from './pages/login/auth.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProveedoresComponent } from './pages/admin/proveedores/proveedores.component';
import { ClientesComponent } from './pages/admin/clientes/clientes.component';
import { ProductosComponent } from './pages/admin/productos/productos.component';
import { DetalleProductoComponent } from './pages/detalle-producto/detalle-producto.component';
import { HomeContentComponent } from './pages/home/home-content.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ListaProductosComponent } from './pages/lista-productos/lista-productos.component';

// Declaramos todos los componentes que creamos
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeContentComponent,
    DetalleProductoComponent,
    ProveedoresComponent,
    ClientesComponent,
    ProductosComponent,
    ListaProductosComponent
  ],

  // Importamos los módulos creados y el módulo "FormsModule"
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
