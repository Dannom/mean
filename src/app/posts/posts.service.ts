import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {IPost} from "./post.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  posts: IPost[] = [];
  postsSubject = new Subject<IPost[]>();

  constructor(private http: HttpClient) { }

  getPosts$() {
    return this.postsSubject.asObservable();
  }

  addPost(post: IPost) {
    this.http.post<{message: string}>('http://localhost:3000/api/posts', post)
      .subscribe((responseData) => {
        console.log(responseData);
        this.posts.push(post);
        this.postsSubject.next([...this.posts]);
    })

  }

  deletePost(post: IPost) {
    const postIndex = this.posts.findIndex((el) => post === el);
    this.posts.splice(postIndex, 1);
    this.postsSubject.next([...this.posts]);
  }

  fetchPosts(): void {
    this.http.get<IPost[]>('http://localhost:3000/api/posts').subscribe((data) => {
      this.posts = data;
      this.postsSubject.next([...this.posts]);
    })
  }
}
