import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { environment } from '../../environments/environment.prod';
import { RegisteredComponent } from '../registered/registered.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private http: HttpClient, public router: Router) { }

  ngOnInit(): void {
    this.router.onSameUrlNavigation = 'reload';

  }
  faUser = faUser;
  UserName!: "";
  Password!: "";
  SteamId64!: 0n;

  registerForm() {
    var registerdto: registerDto = {
      UserName: this.UserName,
      Password: this.Password,
      SteamId64: this.SteamId64

    }

    this.http.post(environment.localHost + "/api/register", registerdto).subscribe(x => {

      localStorage.setItem("id", x.toString());
      this.router.navigate(['/registered']);
    });
  }
}

interface registerDto {
  UserName: string,
  Password: string,
  SteamId64: bigint
}
