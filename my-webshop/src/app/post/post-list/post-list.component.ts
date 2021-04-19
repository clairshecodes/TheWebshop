import {Component , OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs'
import {PostService} from '../../models/services/posts.service'
import {post} from '../../models/post.model'

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls:['./post-list.component.css']
})
export class PostListComponent implements OnInit,OnDestroy {
    postsisEmpty : boolean = true
    posts : post[]=[]
    private postsSub!: Subscription;
   constructor(public postService : PostService){
       
   }
    ngOnDestroy(): void {
        this.postsSub.unsubscribe()
        }
    ngOnInit(): void {
        this.postService.getPosts()
        
        this.postsSub = this.postService.getPostUpdateListener()
        .subscribe((posts : post[])=>{
            if(posts.length >= 0) this.postsisEmpty = false
            this.posts = posts
        })
        
    }
    onDelete(postId : string){
        if(!postId)postId=''
        this.postService.deletePost(postId)
        if([...this.posts])this.postsisEmpty = false
        else this.postsisEmpty = true
    }
    
}