import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { data } from '../data';
import { Article } from '../article/Article';
import { SubscriptionService } from '../subscription.service';

@Component({
selector: 'app-content-component',
templateUrl: './content.component.html',
styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  article: Article;
  constructor(
    private route: ActivatedRoute,
    private service: SubscriptionService
  ) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.article = data.filter(d => d.articleId === params.get('articleId'))[0];
    });
  }

  subscription() {
    this.service.setSubscription(this.article.articleId);
  }
}
