import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  constructor(private authServise: AuthService) {}

  ngOnInit(): void {}
  get control() {
    return this.loginForm.controls;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);

      this.authServise.buscarUsuario().subscribe((data) => {
        console.log('data que llega ', data);
      });
    }
  }
}
