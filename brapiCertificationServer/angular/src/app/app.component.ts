import { Component } from '@angular/core';
import { AlertService } from './service/alert.service';
import { LoginService } from './service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AlertService, LoginService],
})
export class AppComponent {
  title = 'app';

  constructor( private router: Router, private loginService: LoginService){}

  signOut() {
    this.loginService.signOut(() => {
      window.location.href='/login';
    });
  }
}
