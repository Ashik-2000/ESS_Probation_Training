import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

export interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  signUp(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDkaY_90la4vtfiSWxRzEDl40FrnIcg5PA',
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(catchError((errorResponse) => this.handleError(errorResponse)));
  }

  logIn(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDkaY_90la4vtfiSWxRzEDl40FrnIcg5PA',
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(catchError((errorResponse) => this.handleError(errorResponse)));
  }

  private handleError(errorResponse: HttpErrorResponse) {
    console.log(errorResponse);
    let errorMessage = 'An unknow Error occured';
    if (!errorResponse.error || !errorResponse.error.error) {
      return throwError(() => new Error(errorMessage));
    }
    if (errorResponse.error.error.message) {
      errorMessage = errorResponse.error.error.message;
    }
    return throwError(() => new Error(errorMessage));
  }
}
