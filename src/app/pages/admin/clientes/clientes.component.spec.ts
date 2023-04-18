<<<<<<< Updated upstream
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
=======
import { ComponentFixture, TestBed } from '@angular/core/testing';

>>>>>>> Stashed changes
import { ClientesComponent } from './clientes.component';

describe('ClientesComponent', () => {
  let component: ClientesComponent;
  let fixture: ComponentFixture<ClientesComponent>;

<<<<<<< Updated upstream
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
=======
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientesComponent ]
    })
    .compileComponents();

>>>>>>> Stashed changes
    fixture = TestBed.createComponent(ClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
