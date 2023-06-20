import {Component, OnInit} from '@angular/core';
import {TagsService} from "./services/tags.service";
import {ArticlesList} from "./interfaces/articles-list";
import {Article} from "./interfaces/article";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  tagList!: any[];
  selectedTag!: string;
  articlesByTag!: Article[]

  constructor(
    private tagsService: TagsService
  ) { }

  ngOnInit() {
    this.tagsService.getTags()
      .subscribe(res => {
      this.tagList = res.tags
      console.log(this.tagList)
    })
  }


  // se puede mejorar eliminando la interfaz ArticlesList cambiandola por Articles[]
  onSelectTag(tag:string){
    this.selectedTag = tag
    this.tagsService.getArticlesByTag(tag)
      .subscribe(res => {
        // si la respuesta tiene 5 articulos o mas, le asigno los primeros 5 a articlesByTag. Sino le asigno todos los que me de la respuesta
      this.articlesByTag = res.articles.length >= 5 ? res.articles.slice(0,5) : res.articles
      console.log(this.articlesByTag)
    })

  }
}
