import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    // whenever you load the app you will automatically fetch data from DB.
    this.fetchPosts();
  }

// Angular using observables, that is why we need to use subscribe. Post Returns an observable.
  onCreatePost(postData: { name: string; sureName: string }) {
    // send Http request
    this.http.post('rest/apiurl.com/post,', // allow os to send a post request to url, second argu is the request body (the data we wanna store.).
      postData
    ).subscribe(responseData => {
      console.log(responseData);
    });
  }

  onFetchPosts() {
    this.fetchPosts();
  }

  private fetchPosts() {
    this.http.get('https://ng-comple.alalal')
      .pipe(
        map(responseData => {
          const postArray = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postArray.push({...responseData[key], id: key});
            }
          }
          return postArray;
        })
      )
      .subscribe(posts => {
        console.log(posts);
      });
  }
}


