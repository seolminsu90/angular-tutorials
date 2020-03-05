import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { ContentComponent } from './content/content.component';
import { SubscriptionComponent } from './subscription/subscription.component';


const routes: Routes = [
  {
    path : '',
    component : ArticleComponent
  },
  {
    path : 'article/:articleId',
    component : ContentComponent
  },
  {
    path : 'subscription',
    component : SubscriptionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
