import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostService } from '../services/post.service';
import { Post } from '../services/postsInterface';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit{
  
  lst : Post[] = [];

  constructor(private postService: PostService){}
  
  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() : void {
    this.postService.getPosts()
    .subscribe(lst => this.lst = lst);
  }

}