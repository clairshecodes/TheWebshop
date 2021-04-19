import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http'
import {Category} from '../category.model'
import {Subject} from 'rxjs'
import {map} from 'rxjs/operators'


@Injectable({providedIn: 'root'})
export class CategoryService {
    private categories:Category[] = [];
    private CategoryUpdated = new Subject<Category[]>()
    constructor(private http:HttpClient){

    }

    getCategories(){
        this.http.get<{categoryList:any}>('http://localhost:3000/api/categories')
        .pipe(map((catData)=>{
            // tslint:disable-next-line:no-shadowed-variable
            return catData.categoryList.map((cat:any) =>{
                return{
                    name:cat.name,
                    icon:cat.icon,
                    color:cat.color,
                    id:cat._id
                }
            })
        }))
        .subscribe((transformedCats)=>{
            this.categories= transformedCats
            this.CategoryUpdated.next([...this.categories])
        })
    }

    getCatUpdateListener(){
        return this.CategoryUpdated.asObservable()
    }

    addCat(name : string,color : string , icon : string){
        const category : Category = {id:null,name :name,icon:icon,color:color }
        this.http.post<{message: string , categoryId : string}>('http://localhost:3000/api/categories',{id:null,name :name,icon:icon,color:color })
        .subscribe((catData)=>{
            const catID = catData.categoryId
            category.id=catID
            this.categories.push(category)
            this.CategoryUpdated.next([...this.categories])
        })

    }

   

   
}