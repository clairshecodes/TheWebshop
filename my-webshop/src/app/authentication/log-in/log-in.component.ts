import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {any} from 'codelyzer/util/function';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
/*  // ViewChild gives us access to the Form.
//  @ViewChild('f', {static: false}) sgnForm: NgForm;
  /!*defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female'];
  /!*In order to only ouput only some specifik data,
  we add this property which is JsO. This are not related to our Form.
  When the submit button is pushed we want to update data *!/
  user: {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };
  submitted = false;


  suggestUserName() {
    const suggestedName = 'Superuser';
    // Allows you to set the values of the whole form. We need to pass javascript object exactly representing our form.
    // setValue command return a exact copy of the Form value, but this is not the best approach. Override the values of each control.
    /!*  this.signupForm.setValue({
        userData: {
          username: suggestedName,
          email: ''
        },
        secret: 'pet',
        questionsAnswer: '',
        gender: 'male'

      });*!/

    // by passing java script object as values in patchValue method, you override only (a specific) controls.
    this.signupForm.form.patchValue({
      userData: {
        userName: suggestedName
      }
    });
  }

  /!*onSubmit(form: NgForm){
    console.log(form);
  }*!/

  onSubmit() {
    this.submitted = true;
    //console.log(this.signupForm); // ViewChild, is very useful, if you need to access the form not just at the time you submitted but also earlier.
    // we access our form by signupForm and fetching the data from the html code to set this data equal to the JsO property user*
    /!* this.user.username = this.signupForm.value.username;
     this.user.email = this.signupForm.value.email;
     this.user.secretQuestion = this.signupForm.value.secret;
     this.user.answer = this.signupForm.value.questionAnswer;
     this.user.gender = this.signupForm.value.gender;
     this.signupForm.reset();*!/
    console.log(this.sgnForm.value);
  }*!/
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
    //A Form state you can track in generel. Valuechanges is an observable. Everytime form changes it ouput every single change.
    /!* this.signupForm.valueChanges.subscribe(
       (value) => console.log(value)
     );*!/

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

  }*/



}

