import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class AuthService {
    
    constructor(private http: HttpClient){}

   /* signUp(){
        this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]')

    } */

}