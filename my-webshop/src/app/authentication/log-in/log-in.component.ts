import {Component, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styles: []
})
export class LogInComponent implements OnInit {
  username: string;
  password: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  loginUser() {
    if (this.username === "Admin" && this.password === "Admin1234") {
      console.log("Welcome to our webshop!");
    }
  }
}
