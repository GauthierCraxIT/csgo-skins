import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weapons',
  templateUrl: './weapons.component.html',
  styleUrls: ['./weapons.component.css']
})
export class WeaponsComponent implements OnInit {

  constructor(public router: Router) {
  }

  ngOnInit(): void {
    if (!localStorage.getItem("id"))
      this.router.navigate(["/login"]);
  }
}
