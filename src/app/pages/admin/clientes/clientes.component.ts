import { Component } from '@angular/core';
import { Employee } from './clientes'; // Realizamos la importación del objeto "Employee"

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})

export class ClientesComponent {
  title: string = 'poliShop_Clientes';
  msg: string = '';  // Utilizamos la variable "msg" como activador de la alerta.

  employees: Employee[] = []; // Creamos la propiedad "employees" para recibir los
                              // datos del objeto "Employee"

  // Realizamos un "constructor" donde a travez del metodo "localStorage.getItem" le damos
  // persistencia a los datos
  constructor(){
    this.employees = JSON.parse(localStorage.getItem("employees") || "[]"); 
  }

  model:any = {}; 
  model2:any = {};    
  myValue!: number; 
  hideUpdate:boolean  = true;

  // Métodos para adición, borrado, actualización y edición de los datos
  // Utilizamos "localStorage" para almacenar los datos
  
  addEmployee ():void {
    this.employees.push(this.model);
    localStorage.setItem("employees", JSON.stringify(this.employees));
    this.model = {};   
    this.msg = 'Campo agregado'; 
  }

  deleteEmployee(i:number):void {
     let answer = confirm('¿Esta seguro de eliminarlo?');
     if(answer){
      this.employees.splice(i , 1);
      localStorage.setItem("employees", JSON.stringify(this.employees));
      this.msg = 'Campo eliminado';  
     }
  }

  updateEmployee():void {
    let i = this.myValue; 
    for(let j=0; j<=this.employees.length; j++){
      if(i == j){
        this.employees[i] = this.model2; 
        this.model2 = {}; 
        localStorage.setItem("employees", JSON.stringify(this.employees));
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
