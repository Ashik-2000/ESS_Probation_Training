import { Data } from '@angular/router';

export class User {
  constructor(
    public email: string,
    public id: string,
    private _token: string,
    private _tokenExpirationData: Data
  ) {}

  get token() {
    // if the _tokenExpirationData doesn't exist or it expired present time.
    if (!this._tokenExpirationData || new Date() > this._tokenExpirationData) {
      return null;
    }
    return this._token;
  }
}
