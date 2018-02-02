import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor( private router: Router, private loginService: LoginService) { }

  ngOnInit() {
    this.loginService.googleInit();
  }

  signIn(){
    this.loginService.signIn(() => {
      this.router.navigate(['/app/runtests']);
    });
  }

  showJWT(){
    return sessionStorage.getItem('token');
  }
}
