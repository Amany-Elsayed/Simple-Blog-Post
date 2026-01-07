import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private apiUrl = 'http://localhost:3000/posts'

  constructor(private httpClient: HttpClient){}

  getPosts() {
    return this.httpClient.get<any[]>(this.apiUrl)
  }
}
