import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Post } from './post.model';
import { PostService } from './posts.service';

@Component({
  selector: 'app-http-repuest',
  templateUrl: './http-repuest.component.html',
  styleUrls: ['./http-repuest.component.css'],
})
export class HttpRepuestComponent implements OnInit, OnDestroy {
  @ViewChild('postForm') postForm!: NgForm;
  loadedPosts: Post[] = [];
  isFetching = false;
  error: any = null;
  private errorSub!: Subscription;

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.errorSub = this.postService.error.subscribe(
      (errorMessage) => (this.error = errorMessage)
    );
    this.onFetchPosts();
  }

  ngOnDestroy(): void {
    this.errorSub.unsubscribe();
  }

  onCreatePost(postData: Post) {
    // Send Http request
    this.postService.createAndStorePost(postData.title, postData.content);
    // Reseting form submitting
    this.postForm.reset();
  }

  onFetchPosts() {
    // Send Http request
    this.isFetching = true;
    this.postService.fetchPost().subscribe({
      next: (posts) => {
        this.isFetching = false;
        this.loadedPosts = posts;
      },
      error: (error) => {
        this.isFetching = false;
        this.error = error.message;
      },
    });
  }

  onClearPosts() {
    // Send Http request
    this.postService.deletePost().subscribe(() => (this.loadedPosts = []));
  }

  onHandleError() {
    this.error = null;
  }
}
