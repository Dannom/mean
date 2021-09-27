import { Component, OnInit } from '@angular/core';
import {IPost} from "../post.model";
import {PostsService} from "../posts.service";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  posts: IPost[] = [];

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.postsService.fetchPosts();
    this.postsService.getPosts$().subscribe((posts: IPost[]) => {
      this.posts = posts;
    })
  }

  onDeletePost(post: IPost): void {
    this.postsService.deletePost(post);
  }

}
