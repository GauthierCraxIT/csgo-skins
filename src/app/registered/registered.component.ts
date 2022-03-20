import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-registered',
  templateUrl: './registered.component.html',
  styleUrls: ['./registered.component.css']
})
export class RegisteredComponent implements OnInit {

  constructor(public router : Router, public route : ActivatedRoute) { }

  Id = "";

  ngOnInit(): void {
    this.loadId();
  }

  loadId() {
    if (localStorage.getItem("id"))
      this.Id = localStorage.getItem("id")!.toString();
  }
}
