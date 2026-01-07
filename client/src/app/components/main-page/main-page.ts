import { Component } from '@angular/core';
import { BlogService } from '../../service/blog-service';

@Component({
  selector: 'app-main-page',
  imports: [],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css',
})
export class MainPage {
  posts: any[] = []
  selectedPost: any = null

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.blogService.getPosts().subscribe(data => {
      console.log('data from api: ', data);
      
      this.posts = data
    })
  }

  openPost(post: any) {
    if (this.selectedPost?.id === post.id) {
      this.selectedPost = null;
    } else {
      this.selectedPost = post;
    }
  }

  closePost() {
    this.selectedPost = null;
  }
}
