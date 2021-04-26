import {Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms'


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styles: []
})
export class LogInComponent implements OnInit {
  username: string;
  password: string;
  userId : string;
  

  constructor() { 

  }

  ngOnInit(): void {
  }

  loginUser(form :NgForm) {
    if(form.invalid)
        {return}
    const email = form.value.email
    const password = form.value.password

  }
 
}
