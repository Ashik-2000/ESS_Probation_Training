import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthResponseData, AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  isLoginMode = true;
  isLoading = false;
  error: any = null;

  constructor(private authService: AuthService) {}

  onSwitchMode(form: NgForm) {
    this.isLoginMode = !this.isLoginMode;
    form.reset();
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    this.isLoading = true;

    // Creating a value to store a observable
    let authObs: Observable<AuthResponseData>;

    // Checking if user trying to login or logout
    if (this.isLoginMode) {
      // storing the logIn observale returned by service
      authObs = this.authService.logIn(email, password);
    } else {
      // storing the signIn observale returned by service
      authObs = this.authService.signUp(email, password);
    }

    // calling the subscribe() of the observables and dealing with errors
    authObs.subscribe({
      next: (resData) => {
        console.log(resData);
        this.isLoading = false;
      },
      error: (errorMessage) => {
        console.log(errorMessage);
        this.error = errorMessage;
        this.isLoading = false;
      },
    });

    form.reset();
  }
}
