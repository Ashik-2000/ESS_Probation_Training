import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http-repuest',
  templateUrl: './http-repuest.component.html',
  styleUrls: ['./http-repuest.component.css'],
})
export class HttpRepuestComponent implements OnInit {
  loadedPosts = [];

  constructor() {}

  ngOnInit() {}

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    console.log(postData);
  }

  onFetchPosts() {
    // Send Http request
  }

  onClearPosts() {
    // Send Http request
  }
}
