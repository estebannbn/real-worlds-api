import {Component, OnInit} from '@angular/core';
import {TagsService} from "./services/tags.service";
import {Article} from "./interfaces/article";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  // el ! al final del nombre de la variable, indica que no se le va a asignar un valor desde el principio.
  // si no le pones eso te va a tirar error
  tagList!: any[];
  selectedTag!: string;
  articlesByTag!: Article[];

  // en el constructor declaramos una variable privada correspondiente al servicio que vamos a utilizar
  constructor(
    private tagsService: TagsService
  ) { }


  // Apenas entras a la pagina, se trae la lista con los tags seleccionables
  ngOnInit() {
    this.tagsService.getTags()
      .subscribe(response => {
      this.tagList = response.tags
      console.log(this.tagList)
    })
  }



  onSelectTag(tag:string){
    this.selectedTag = tag
    this.tagsService.getArticlesByTag(tag)
      .subscribe(response => {
        console.log(response.articlesCount)
        this.articlesByTag = response.articles.slice(0,5)  //devuelve los 5 primeros articulos del array
        console.log(this.articlesByTag)
      })
  }


  // con solo asignarle un string vacio, tambien limpia los articulos relacionados al tag
  deleteSelectedTag(){
    this.selectedTag = ''
  }

}
