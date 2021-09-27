import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss'],
})
export class PostCreateComponent implements OnInit {
  postForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private postsService: PostsService
  ) {}

  ngOnInit(): void {
    this.postForm = this.formBuilder.group({
      title: new FormControl('', Validators.required),
      content: new FormControl('', Validators.required),
    });
  }

  onAddPost() {
    if (this.postForm.invalid) {
      return;
    }
    this.postsService.addPost(this.postForm.getRawValue());
    this.postForm.markAsPristine();
    this.postForm.markAsUntouched();
    this.postForm.updateValueAndValidity();
  }
}
