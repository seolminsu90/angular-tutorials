import { Component, OnInit } from '@angular/core';
import { data } from '../data';
import { Article } from './Article';


@Component({
selector: 'app-article-component',
templateUrl: './article.component.html',
styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  description = 'Hello This Component is Article.';
  articles: Article[];
  tests = ['1', '2', '3'];
  bool = true;

  constructor() {
  }

  getAlertEvent() {
    window.alert('is Notify');
  }
  ngOnInit() {
    this.articles = data;
  }
}
