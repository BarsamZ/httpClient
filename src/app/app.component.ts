import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ipost } from "./post.interface";
import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'Practice-HttpClient';
postsArry:any;

@ViewChild('postTitle') postTitle:ElementRef | undefined;
@ViewChild('postBody') postBody:ElementRef | undefined;
@ViewChild('postId') postId:ElementRef | undefined;


constructor(private postService:PostService){}


ngOnInit() {
 
 this.postService.getPosts().subscribe(
  response => this.postsArry = response
 );
  }

addPost(){

  let post:Ipost ={UserId: 0, Title:'', Body:''};
  post.UserId = 10;
  post.Title = this.postTitle.nativeElement.value;
  post.Body = this.postBody.nativeElement.value;




  this.postService.postPost(post).subscribe(
  response => console.log(response)
);
}

putpost(){

   let  id = +this.postId.nativeElement.value;

  let post:Ipost ={UserId: 0, Title:'', Body:''};
  post.UserId = 10;
  post.Title = this.postTitle.nativeElement.value;
  post.Body = this.postBody.nativeElement.value;
this.postService.putPost(post, id).subscribe(
  Response => console.log(Response)
);

}


}
