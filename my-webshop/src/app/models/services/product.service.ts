import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http'
import {Product} from '../product.model'
import {Subject} from 'rxjs'
import {map} from 'rxjs/operators'


@Injectable({providedIn: 'root'})
export class ProductService {
    private products:Product[] = [];
    private productUpdated = new Subject<Product[]>()
    constructor(private http:HttpClient){

    }

    getProducts(){
        this.http.get<{message:string ,products:any}>('http://localhost:3000/api/products')
        .pipe(map((productData)=>{
            // tslint:disable-next-line:no-shadowed-variable
            return productData.products.map((product:any) =>{
                return{
                    title:product.title,
                    description:product.description,
                    id:product._id,
                    price:product.price
                }
            })
        }))
        .subscribe((transformedPosts)=>{
            this.products= transformedPosts
            this.productUpdated.next([...this.products])
        })
    }

    getProductUpdateListener(){
        return this.productUpdated.asObservable()
    }
    addProduct(inputProduct:Product){
        this.http.post<{message: string , productID:string}>('http://localhost:3000/api/products',inputProduct)
        .subscribe((resData)=>{
            const productID = resData.productID
            inputProduct.id=productID
            this.products.push(inputProduct)
            this.productUpdated.next([...this.products])
        })

    }

    deleteProduct(productId : string){
        this.http.delete('http://localhost:3000/api/products' + productId)
        .subscribe(()=>{
            const updateProduct=this.products.filter(product =>product.id !== productId)
            this.products=updateProduct
            this.productUpdated.next([...this.products])
        })
    }

    getProduct(id : string){
        return{...this.products.find(p=>p.id === id)}
    }
}