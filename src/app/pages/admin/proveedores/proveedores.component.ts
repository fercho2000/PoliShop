//Los comentarios del componente "Clientes" aplican igual


import { Component } from '@angular/core';

@Component({
  // selector: 'proveed-root',
  selector: 'app-providers',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})

export class ProveedoresComponent {
  title: string = 'poliShop_Proveedores';
  msg: string = '';

  providers = [
    { 'name': 'Legumbres Cano', 'category': 'Legumbres', 'email': 'lcano@email.com' },
    { 'name': 'American Fruits', 'category': 'Frutas', 'email': 'afruit@email.com' },
    { 'name': 'Red Pantry', 'category': 'Carnes', 'email': 'redp@email.com' },
    { 'name': 'Bodega Toscana', 'category': 'Bebidas alcoholicas', 'email': 'btosc@email.com' },
  ];

  model: any = {};
  model2: any = {};
  myValue!: number;
  hideUpdate: boolean = true;


  addProviders(): void {
    this.providers.push(this.model);
    this.msg = 'Campo agregado';
  }

  deleteProviders(i: number): void {
    let answer = confirm('¿Esta seguro de eliminarlo?');
    if (answer) {
      this.providers.splice(i, 1);
      this.msg = 'Campo eliminado';
    }
  }

  updateProviders(): void {
    let i = this.myValue;
    for (let j = 0; j < this.providers.length; j++) {
      if (i == j) {
        this.providers[i] = this.model2;
        this.model2 = {};
        this.msg = 'Campo actualizado'
        this.hideUpdate = true;
      }
    }
  }

  editProviders(i: number) {
    this.hideUpdate = false;
    this.model2.name = this.providers[i].name;
    this.model2.category = this.providers[i].category;
    this.model2.email = this.providers[i].email;
    this.myValue = i;
  }

  closeAlert(): void {
    this.msg = '';
  }

}
