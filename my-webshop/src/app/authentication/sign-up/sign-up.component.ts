import {Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms'

import {UserService} from '../../models/services/user.service'
import {User} from '../../models/user.model'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styles: []
})
export class SignUpComponent implements OnInit {
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

  signUpUser(form :NgForm) {
    if(form.invalid)
        {return}
    const email = form.value.email
    const password = form.value.password
    const res =this.userService.loginUser(email, password)
    
  }
 
}
