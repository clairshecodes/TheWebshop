import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {HttpClient} from '@angular/common/http';


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
    this.fetchPosts();
  }

  constructor(private http: HttpClient) {}
  
  onSubmit(postData) {
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