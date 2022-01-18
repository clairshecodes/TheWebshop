import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { LogInService } from 'src/app/services/log-in.service';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in-new.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUsernames = ['Chris', 'Anna'];
 

  // in here we initialize our form
  ngOnInit() {
    this.logInService.fetchPosts();
  }

  constructor(private http: HttpClient, private logInService: LogInService) {}

  onSubmit(postData){
    this.logInService.onSubmit(postData);
  }
  fetchPosts(){
    this.logInService.fetchPosts();
  }
}