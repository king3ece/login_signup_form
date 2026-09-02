// import { Component } from '@angular/core';

// @Component({
//   imports: [],
//   selector: 'app-signup',
//   styleUrl: './signup.css',
//   templateUrl: './signup.html',
// })
// export class Signup {}

import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators
} from '@angular/forms';

import { Router, RouterLink } from '@angular/router';


const passwordMatchValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {

  const password = control.get('password')?.value;
  const confirmPassword = control.get('confirmPassword')?.value;

  if (!password || !confirmPassword) {
    return null;
  }

  return password === confirmPassword
    ? null
    : { passwordMismatch: true };
};


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class SignupComponent {

  private fb = inject(FormBuilder);
  private router = inject(Router);

  showPassword = false;
  showConfirmPassword = false;

  signupForm = this.fb.nonNullable.group(
    {
      firstName: ['', [
        Validators.required,
        Validators.minLength(2)
      ]],

      lastName: ['', [
        Validators.required,
        Validators.minLength(2)
      ]],

      email: ['', [
        Validators.required,
        Validators.email
      ]],

      password: ['', [
        Validators.required,
        Validators.minLength(6)
      ]],

      confirmPassword: ['', [
        Validators.required
      ]],

      terms: [false, [
        Validators.requiredTrue
      ]]
    },
    {
      validators: passwordMatchValidator
    }
  );


  get firstName() {
    return this.signupForm.controls.firstName;
  }

  get lastName() {
    return this.signupForm.controls.lastName;
  }

  get email() {
    return this.signupForm.controls.email;
  }

  get password() {
    return this.signupForm.controls.password;
  }

  get confirmPassword() {
    return this.signupForm.controls.confirmPassword;
  }

  get terms() {
    return this.signupForm.controls.terms;
  }


  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }


  toggleConfirmPassword(): void {
    this.showConfirmPassword = !this.showConfirmPassword;
  }


  submit(): void {

    if (this.signupForm.invalid) {

      this.signupForm.markAllAsTouched();

      return;
    }

    const data = this.signupForm.getRawValue();

    console.log('Signup:', data);

    /*
     * Pas encore de backend.
     *
     * Pour le moment on sauvegarde
     * les données uniquement pour
     * faire des tests frontend.
     */

    localStorage.setItem(
      'user',
      JSON.stringify({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email
      })
    );

    alert('Compte créé avec succès !');

    this.router.navigate(['/login']);
  }
}
