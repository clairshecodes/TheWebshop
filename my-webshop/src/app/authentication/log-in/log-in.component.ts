import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {any} from 'codelyzer/util/function';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUsernames = ['Chris', 'Anna'];

  // in here we initialize our form
  ngOnInit() {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        email: new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails)
      }),
      gender: new FormControl('male')
    });

    //Status changes, with this we can view states that changes. Nice observable, allowing you to see whant is happening in your form.
    this.signupForm.statusChanges.subscribe(
      (status) => console.log(status)
    );
  }

  onSubmit() {
    console.log(this.signupForm);
    this.signupForm.reset();

  }

  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true};
    }
    return null;
  }

// Creating a Custom Async Validator. Typically your need to reach out to server to check for validations. That however asyncronize operation, cause the response
  // is not coming back instantly, instead it just takes a couple of seconds. So we also need async validators, which able us to wait for a response.
  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({'emailIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;

  }
  constructor(private http: HttpClient) {}
  Submit(postData) {
    this.http
      .post(
        'https://webshop-dtu-default-rtdb.firebaseio.com/posts.json',
        postData
      )
      .subscribe(responseData => {
        console.log(responseData);
      });
  }

  private fetchPosts(){
    this.http.get('https://webshop-dtu-default-rtdb.firebaseio.com/posts.json')
    .subscribe(posts => {
      console.log(posts);
    });
  }
}