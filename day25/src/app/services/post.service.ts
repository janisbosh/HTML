import { Injectable } from '@angular/core';
import { Post } from './postsInterface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  private postUrl: string = "http://localhost:8080/employees";

  constructor(private http: HttpClient) { }

  getPosts() : Observable<Post[]>{
    return this.http.get<Post[]>(this.postUrl);
  }
}
  

