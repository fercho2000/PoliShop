import { Component } from '@angular/core';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})

export class ClientesComponent {
  title:string = 'poliShop_Clientes';
  msg:string = '';  // Utilizamos la variable "msg" como activador de la alerta.

  // Realizamos un array de objetos donde estan los datos de los clientes.
  employees = [
    {'name': 'Rick','surname': 'Mira', 'email': 'rick@mail.com'},
    {'name': 'John','surname': 'Palma', 'email': 'john@mail.com'},
    {'name': 'Steve','surname': 'Bush', 'email': 'steve@mail.com'},
    {'name': 'David','surname': 'Brown', 'email': 'brown@mail.com'},

  ];

  // Los modelos creados reciben los datos ingresados en los formularios.
  model:any = {}; 
  model2:any = {};
  myValue!: number; 
  hideUpdate:boolean  = true; // Con esta variable manejamos la desaparición del formulario para actualizar.

  // Aqui se exponen los diferentes métodos para manejar los datos.
  addEmployee():void {
    this.employees.push(this.model);
    this.msg = 'Campo agregado';   
  }

  deleteEmployee(i:number):void {
     let answer = confirm('¿Esta seguro de eliminarlo?'); 
     if(answer){
      this.employees.splice(i , 1);
      this.msg = 'Campo eliminado';  
     }
  }

  updateEmployee():void {
    let i = this.myValue; 
    for(let j=0; j<this.employees.length; j++){
      if(i == j){
        this.employees[i] = this.model2; 
        this.model2 = {}; 
        this.msg = 'Campo actualizado'
        this.hideUpdate = true;
      }
    }
  }

  editEmployee(i:number) {
    this.hideUpdate = false; 
    this.model2.name = this.employees[i].name;
    this.model2.surname = this.employees[i].surname;
    this.model2.email = this.employees[i].email;
    this.myValue = i; 
  }

  closeAlert():void{
    this.msg = ''; 
  }

}
