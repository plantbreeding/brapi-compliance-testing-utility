import { Injectable } from '@angular/core';

declare var gapi: any;

@Injectable()
export class LoginService {

  public auth2: any;

  constructor() {
    this.googleInit();
  }

  public googleInit() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: '408930718026-1m4t6slfmp8c0vu0a4s0sp4ujvv3vqfa.apps.googleusercontent.com',
        cookiepolicy: 'none',
        scope: 'profile email'
      });
    });
  }

  signIn(callback: () => any) {
    this.auth2.signIn({ prompt: 'select_account' }).then(
      () => {
        let googleUser = this.auth2.currentUser.get();
        sessionStorage.setItem('token', 'Bearer ' + googleUser.getAuthResponse().id_token);
        callback();

      }, (error) => {
        alert(JSON.stringify(error, undefined, 2));
      });
  }

  signOut(callback: () => any) {
    this.auth2.signOut().then(function () {
      sessionStorage.removeItem('token');
      callback();
    });
  }
}
