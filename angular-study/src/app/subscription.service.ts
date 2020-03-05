
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MessageResponse } from './subscription/MessageResponse';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  articleIds: string[] = [];

  constructor(
    private http: HttpClient
  ) {

  }

  getSubscriptionList() {
    return this.articleIds;
  }

  setSubscription(articleId: string) {
    this.articleIds.push(articleId);
    window.alert('구독 완료');
  }

  resetSubscription() {
    this.articleIds = [];
  }

  getMessages(): Observable<MessageResponse> {
    return this.http.get<MessageResponse>('/assets/data.json', {
      responseType : 'json'
    });
  }
}
