import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TagsList} from "../interfaces/tags-list";
import {ArticlesList} from "../interfaces/articles-list";
import {Observable} from "rxjs";
import {Article} from "../interfaces/article";


@Injectable({
  providedIn: 'root'
})


export class TagsService {

  private mainURL: string = 'https://api.realworld.io/api/';

  constructor(private http:HttpClient) { }


  getTags():Observable<TagsList>{
    return this.http.get<TagsList>(this.mainURL + 'tags')
  }


  // esta dificil
  getArticlesByTag(tag:string):Observable<ArticlesList>{
    return this.http.get<ArticlesList>(this.mainURL + 'articles/?tag=' + tag)
  }

 }


