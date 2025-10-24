import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Subject, tap, throwError } from 'rxjs';
import { User } from './auth.model';

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
  user = new Subject<User>();

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
      .pipe(
        catchError((errorResponse) => this.handleError(errorResponse)),
        tap((responseData) => this.handleAuthentication(responseData))
      );
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
      .pipe(
        catchError((errorResponse) => this.handleError(errorResponse)),
        tap((responseData) => this.handleAuthentication(responseData))
      );
  }

  private handleAuthentication(responseData: AuthResponseData) {
    const expirationDate = new Date(
      new Date().getTime() + Number(responseData.expiresIn) * 1000
    );
    const user = new User(
      responseData.email,
      responseData.localId,
      responseData.idToken,
      expirationDate
    );
    this.user.next(user);
  }

  private handleError(errorResponse: HttpErrorResponse) {
    console.log(errorResponse); 
    let errorMessage = 'An unknown Error occured';
    if (!errorResponse.error || !errorResponse.error.error) {
      return throwError(() => new Error(errorMessage));
    }
    if (errorResponse.error.error.message) {
      errorMessage = errorResponse.error.error.message;
    }
    return throwError(() => new Error(errorMessage));
  }
}
