import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.css', '../../../app.component.css']
})
export class MenuHeaderComponent {

  categorias: string[] = [
    'verdura',
    'frutas',
    'granos',
    'carnes',
    'pollo',
    'pescados'];

  constructor(private router: Router) { }

  onCategorySelected(categoria: string) {
    this.router.navigate(['/lista', categoria])
  }
}
