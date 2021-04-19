import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http'
import {post} from '../post.model'
import {Subject} from 'rxjs'
import {map} from 'rxjs/operators'


@Injectable({providedIn: 'root'})
export class PostService {
    private posts:post[] = [];
    private postUpdated = new Subject<post[]>()
    constructor(private http:HttpClient){

    }

    getPosts(){
        this.http.get<{message:string ,posts:any}>('http://localhost:3000/api/posts')
        .pipe(map((postData)=>{
            // tslint:disable-next-line:no-shadowed-variable
            return postData.posts.map((post:any) =>{
                return{
                    title:post.title,
                    content:post.content,
                    id:post._id
                }
            })
        }))
        .subscribe((transformedPosts)=>{
            this.posts= transformedPosts
            this.postUpdated.next([...this.posts])
        })
    }

    getPostUpdateListener(){
        return this.postUpdated.asObservable()
    }
    addPost(inputPost:post){
        this.http.post<{message: string , postId:string}>('http://localhost:3000/api/posts',inputPost)
        .subscribe((resData)=>{
            const postID = resData.postId
            inputPost.id=postID
            this.posts.push(inputPost)
            this.postUpdated.next([...this.posts])
        })

    }

    deletePost(postId : string){
        this.http.delete('http://localhost:3000/api/posts' + postId)
        .subscribe(()=>{
            const updatePosts=this.posts.filter(post =>post.id !== postId)
            this.posts=updatePosts
            this.postUpdated.next([...this.posts])
        })
    }

    getPost(id : string){
        return{...this.posts.find(p=>p.id === id)}
    }
}