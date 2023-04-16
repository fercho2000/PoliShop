import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})

export class AppComponent {
  title:string = 'poliShop_Clientes';
  msg:string = ''; 

  employees = [
    {'name': 'Rick','surname': 'Mira', 'email': 'rick@email.com'},
    {'name': 'John','surname': 'Palma', 'email': 'john@email.com'},
    {'name': 'Steve','surname': 'Bush', 'email': 'steve@email.com'}
  ];

  model:any = {}; 
  model2:any = {};
  myValue!: number; 
  hideUpdate:boolean  = true;


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
