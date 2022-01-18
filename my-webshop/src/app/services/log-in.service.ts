import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
    export class LogInService{
    constructor(private http: HttpClient) {}
    onSubmit(postData) {
        this.http
          .post(
            'https://webshop-dtu-default-rtdb.firebaseio.com/log-detail.json',
            postData
          )
          .subscribe(responseData => {
            console.log(responseData);
          });
      }
    
      fetchPosts(){
        this.http.get('https://webshop-dtu-default-rtdb.firebaseio.com/login-detail.json')
        .subscribe(posts => {
          console.log(posts);
        });
      }
}