import {Component, OnInit } from '@angular/core'
import { NgForm } from '@angular/forms'
import { ActivatedRoute, ParamMap } from '@angular/router';
import {ProductService} from '../../models/services/product.service'
import {Product} from '../../models/product.model'

@Component(
    {
        templateUrl: './product-create.component.html',
        selector : 'product-create',
        styleUrls: ['./product-create.component.css']
    }
)
export class ProductCreateComponent implements OnInit{ 
    private mode='create'
    private productId: string  
    product :Product
    constructor(public productService : ProductService ,public route: ActivatedRoute){
        this.productId=''
        this.product = new Product()
    }

    ngOnInit(){
        this.route.paramMap.subscribe((paramMap : ParamMap)=>{
            if(paramMap.has('productId')){
                this.mode='edit'
                this.productId = paramMap.get('productId') || ''
                this.product = this.productService.getProduct(this.productId);
            }else{
                this.mode='create'
                this.productId=''
            }
        })
    }
    onAddProduct(form :NgForm){
        if(form.invalid)
        {return}
        const title=form.value.enteredTitle;
        const description = form.value.enteredDescriptionn;
        const price = form.value.enteredPrice;
        const post:any = ({title,description,price})
        this.productService.addProduct(post)
        
    }
}