
import {Component, OnInit } from '@angular/core'
import { NgForm } from '@angular/forms'
import { ActivatedRoute, ParamMap } from '@angular/router';
import {CategoryService} from '../../models/services/category.services'
import {Category} from '../../models/category.model'

@Component(
    {
        selector:'cat-create',
        templateUrl:'./category-create.component.html',
        styleUrls: ['./category-create.component.css']
    }
)
export class CatCreateComponent implements OnInit{ 
    private mode='create'
    private catId: string  ; 
    category :Category
    constructor(public categoryService : CategoryService ){
        this.catId=''
        this.category = new Category()
    }

    ngOnInit(){
        
    }
    onAddCat(form :NgForm){
        if(form.invalid)
        {return}
        const name=form.value.entereName;
        const icon = form.value.enteredIcon;
        const color=form.value.enteredColor
        this.categoryService.addCat(name,icon,color)
    }
}