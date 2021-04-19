import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http'
import {User} from '../user.model'
import {Subject} from 'rxjs'
import {map} from 'rxjs/operators'


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
                    name:user.name,
                    email:user.email,
                    passwordHash:user.passwordHash,
                    street:user.street,
                    apartment:user.apartment,
                    zip:user.zip,
                    city:user.city,
                    country:user.country,
                    phone:user.phone,
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
    addUser(inputuser:User){
        this.http.post<{message: string , userID:string}>('http://localhost:3000/api/users',inputuser)
        .subscribe((resData)=>{
            const userID = resData.userID
            inputuser.id=userID
            this.users.push(inputuser)
            this.userUpdated.next([...this.users])
        })

    }

    deleteProduct(userId : string){
        this.http.delete('http://localhost:3000/api/products' + userId)
        .subscribe(()=>{
            const updateUsers=this.users.filter(user =>user.id !== userId)
            this.users=updateUsers
            this.userUpdated.next([...this.users])
        })
    }

    getProduct(id : string){
        return{...this.users.find(p=>p.id === id)}
    }
}