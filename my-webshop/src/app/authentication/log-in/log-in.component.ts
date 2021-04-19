import {Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms'

import {UserService} from '../../models/services/user.service'
import {User} from '../../models/user.model'

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styles: []
})
export class LogInComponent implements OnInit {
  username: string;
  password: string;
  userId : string
 user :User;
  

  constructor(public userService: UserService) { 
    this.userId=''
    this.user = new User()
  }

  ngOnInit(): void {
  }

  loginUser(form :NgForm) {
    if(form.invalid)
        {return}
    const email = form.value.email
    const password = form.value.password
    const res =this.userService.loginUser(email, password)
    console.log(res)
  }
 
}
