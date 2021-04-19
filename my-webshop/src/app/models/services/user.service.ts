import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse}from '@angular/common/http'
import {User} from '../user.model'
import {Subject} from 'rxjs'
import {catchError, map} from 'rxjs/operators'
import { EmailValidator } from '@angular/forms';


@Injectable({providedIn: 'root'})
export class UserService {
    private users:User[] = [];
    private userUpdated = new Subject<User[]>()
    constructor(private http:HttpClient){

    }

    getUsers(){
        this.http.get<{message:String,users:User[]}>('http://localhost:3000/api/users')
        .pipe(map((userData)=>{
            // tslint:disable-next-line:no-shadowed-variable
            return userData.users.map((user:any) =>{
                return{
                    id:user._id,
                    firstname:user.firstname,
                    lastname:user.lastname,
                    birthday:user.birthday,
                    username:user.username,
                    email:user.email,
                    passwordHash:user.passwordHash,
                    street:user.street,
                    apartment:user.apartment,
                    zip:user.zip,
                    city:user.city,
                    country:user.country,
                    phone:user.phone,
                    token:user.token,
                    isAdmin:user.isAdmin
                }
            })
        }))
        .subscribe((transformedUsers)=>{
            this.users= transformedUsers
            this.userUpdated.next([...this.users])
        })
    }

    getUserUpdateListener(){
        return this.userUpdated.asObservable()
    }

    loginUser(inputEmali : string,inputPassword:string){
        var errr = ''
        this.http.post<{resEmail : String,resPassword:String}>('http://localhost:3000/api/users/login',{email : inputEmali,password : inputPassword})
        .subscribe((resData)=>{
            console.log(resData)
        },
        (error)=>{
        errr = this.getServerErrorMessage(error)
        })
        console.log(errr)
    }

    addUser(inputuser:User){
        this.http.post<{user : User}>('http://localhost:3000/api/users',inputuser)
        .subscribe((resData)=>{
            const userID = resData.user.id
            inputuser.id=userID
            this.users.push(inputuser)
            this.userUpdated.next([...this.users])
        })

    }

    deleteUser(userId : string){
        this.http.delete('http://localhost:3000/api/products' + userId)
        .subscribe(()=>{
            const updateUsers=this.users.filter(user =>user.id !== userId)
            this.users=updateUsers
            this.userUpdated.next([...this.users])
        })
    }

    getUser(id : string){
        return{...this.users.find(p=>p.id === id)}
    }

    private getServerErrorMessage(error: HttpErrorResponse): string {
        switch (error.status) {
            case 404: {
                return `Not Found: ${error.message}`;
            }
            case 403: {
                return `Access Denied: ${error.message}`;
            }
            case 500: {
                return `Internal Server Error: ${error.message}`;
            }
            default: {
                return `Unknown Server Error: ${error.message}`;
            }
    
        }
    }
}