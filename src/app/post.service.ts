import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ipost } from './post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  url ="https://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) { }

  getPosts(){
    
    return this.http.get(this.url);

  }

  postPost(post:Ipost){
    return this.http.post(this.url,post);
  }
 putPost(post:Ipost, id:number){
  return this.http.put(this.url + "/" + id, post);
 }


}
