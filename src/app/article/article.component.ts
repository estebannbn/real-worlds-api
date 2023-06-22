import {Component, Input} from '@angular/core';
import {Article} from "../interfaces/article";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

// Este componente corresponde a cada articulo que se carga al seleccionar un tag en el inicio


export class ArticleComponent {

  // Por ahora, solamente traemos el articulo mediante un input y lo trabajamos en el html
  @Input() article!: Article

  constructor() {}

}
