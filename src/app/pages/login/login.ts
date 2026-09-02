// import { Component } from '@angular/core';

// @Component({
//   imports: [],
//   selector: 'app-login',
//   styleUrl: './login.css',
//   templateUrl: './login.html',
// })
// export class Login {}

import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {

  private fb = inject(FormBuilder);
  private router = inject(Router);

  showPassword = false;
  submitted = false;

  loginForm = this.fb.nonNullable.group({
    email: ['', [
      Validators.required,
      Validators.email
    ]],

    password: ['', [
      Validators.required,
      Validators.minLength(6)
    ]],

    rememberMe: [false]
  });

  get email() {
    return this.loginForm.controls.email;
  }

  get password() {
    return this.loginForm.controls.password;
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  submit(): void {

    this.submitted = true;

    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const data = this.loginForm.getRawValue();

    console.log('Login:', data);

    // Pour l'instant, pas de backend.
    // On simule simplement une connexion.

    localStorage.setItem('isLoggedIn', 'true');

    this.router.navigate(['/']);
  }
}
