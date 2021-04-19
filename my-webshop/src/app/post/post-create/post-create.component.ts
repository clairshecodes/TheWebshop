import {Component, OnInit } from '@angular/core'
import { NgForm } from '@angular/forms'
import { ActivatedRoute, ParamMap } from '@angular/router';
import {PostService} from '../../models/services/posts.service'
import {post} from '../../models/post.model'

@Component(
    {
        templateUrl: './post-create.component.html',
        selector : 'app-post-create',
        styleUrls: ['./post-create.component.css']
    }
)
export class PostCreateComponent implements OnInit{ 
    private mode='create'
    private postId: string  ; 
    post :post
    constructor(public postService : PostService ,public route: ActivatedRoute){
        this.postId=''
        this.post = new post()
    }

    ngOnInit(){
        this.route.paramMap.subscribe((paramMap : ParamMap)=>{
            if(paramMap.has('postId')){
                this.mode='edit'
                this.postId = paramMap.get('postId') || ''
                this.post = this.postService.getPost(this.postId);
            }else{
                this.mode='create'
                this.postId=''
            }
        })
    }
    onAddPost(form :NgForm){
        if(form.invalid)
        {return}
        const title=form.value.entereTitle;
        const content = form.value.enteredContent;
        const post:any = ({title,content})
        this.postService.addPost(post)
    }
}