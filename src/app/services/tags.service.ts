import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TagsList} from "../interfaces/tags-list";
import {ArticlesList} from "../interfaces/articles-list";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})


export class TagsService {


  //usamos esta URL y en los metodos de las peticiones, le concatenamos la ruta que queremos tomar
  private mainURL: string = 'https://api.realworld.io/api/';

  constructor(private http:HttpClient) { }

  // Devuelve un TagsList, que encontramos en 'https://api.realworld.io/api/tags'
  getTags():Observable<TagsList>{
    return this.http.get<TagsList>(this.mainURL + 'tags')
  }


  // Devuelve un ArticlesList, que encontramos al buscar 'https://api.realworld.io/api/articles?tag=nombre-del-tag'
  getArticlesByTag(tag:string):Observable<ArticlesList>{
    return this.http.get<ArticlesList>(this.mainURL + 'articles?tag=' + tag)
  }

 }


