import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { environment } from '../../environments/environment.prod';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, public router: Router) { }

  ngOnInit(): void {}

  UserName!: "";
  Password!: "";
  faUser = faUser;



  loginForm() {
    var logindto: loginDto = {
      UserName: this.UserName,
      Password: this.Password
    }

    this.http.post(environment.localHost + "/api/login", logindto).subscribe(x => {
      localStorage.setItem("id", x.toString());
      this.router.navigate(["/"]);
    });
  }
}

interface loginDto {
  UserName: string,
  Password: string
}
