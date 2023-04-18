import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< Updated upstream
=======
import { FormsModule } from '@angular/forms';
>>>>>>> Stashed changes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeContentModule } from './feature/home/home-content.module';
import { LoginModule } from './feature/login/login.module';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
<<<<<<< Updated upstream
import { CoreModule } from './core';
import { ClientesComponent } from './feature/admin/clientes/clientes.component';
import { ProveedoresComponent } from './feature/admin/proveedores/proveedores.component';
import { FormsModule } from '@angular/forms';
import { HomeContentComponent } from './feature/home/home-content/home-content.component';
import { ProductosComponent } from './feature/admin/productos/productos.component';
=======
import { ClientesComponent } from './feature/admin/clientes/clientes.component';
import { HomeContentComponent } from './feature/home/home-content/home-content.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './feature/admin/productos/productos/productos.component';

// import { AdminModule } from './feature/admin/admin.module';
// import { ClientesRoutingModule } from './feature/admin/clientes-routing.module';



// const appRoutes:Routes=[

//   {path:'', component:ClientesComponent},
//   {path:'', component:ProductosComponent},
//   {path:'', component:HomeContentComponent} 

// ];
>>>>>>> Stashed changes


// Declaramos todos los componentes que creamos
@NgModule({
  declarations: [
    AppComponent,
    HomeContentComponent,
    PageNotFoundComponent,
    ClientesComponent,
<<<<<<< Updated upstream
    ProveedoresComponent,
    ProductosComponent

    
=======
    ProductosComponent
>>>>>>> Stashed changes
  ],

  // Importamos los módulos creados y el módulo "FormsModule"
  imports: [
    BrowserModule,
    CoreModule,
    HomeContentModule,
    LoginModule,
    AppRoutingModule,
<<<<<<< Updated upstream
    FormsModule
=======
    FormsModule,
    // AdminModule,
    // ClientesRoutingModule,

    // RouterModule.forRoot(appRoutes)
    
>>>>>>> Stashed changes
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
