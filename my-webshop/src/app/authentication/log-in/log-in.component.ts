import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styles: []
})
export class LogInComponent {
  // ViewChild gives us access to the Form.
  @ViewChild('f', {static: false}) signupForm: NgForm;
  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female'];
  /*In order to only ouput only some specifik data,
  we add this property which is JsO. This are not related to our Form.
  When the submit button is pushed we want to update data */
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
    /*  this.signupForm.setValue({
        userData: {
          username: suggestedName,
          email: ''
        },
        secret: 'pet',
        questionsAnswer: '',
        gender: 'male'

      });*/

    // by passing java script object as values in patchValue method, you override only (a specific) controls.
    this.signupForm.form.patchValue({
      userData: {
        userName: suggestedName
      }
    });
  }

  /*onSubmit(form: NgForm){
    console.log(form);
  }*/

  onSubmit() {
    this.submitted = true;
    //console.log(this.signupForm); // ViewChild, is very useful, if you need to access the form not just at the time you submitted but also earlier.
    // we access our form by signupForm and fetching the data from the html code to set this data equal to the JsO property user*
    /* this.user.username = this.signupForm.value.username;
     this.user.email = this.signupForm.value.email;
     this.user.secretQuestion = this.signupForm.value.secret;
     this.user.answer = this.signupForm.value.questionAnswer;
     this.user.gender = this.signupForm.value.gender;
     this.signupForm.reset();*/
    console.log(this.signupForm.value);
  }
}
