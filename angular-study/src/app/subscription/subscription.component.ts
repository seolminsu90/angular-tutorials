import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from '../subscription.service';
import { Message } from './Message';
import { MessageResponse } from './MessageResponse';

@Component({
selector: 'app-subscription-component',
templateUrl: './subscription.component.html',
styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {

  articleIds: string[] = [];
  messages: Message[];
  constructor(
    private service: SubscriptionService
  ) {

  }

  ngOnInit() {
    this.getSubscriptionList();
    this.getMessages();
  }

  getSubscriptionList() {
    this.articleIds = this.service.getSubscriptionList();
  }

  getMessages() {
    this.service.getMessages().subscribe((response: MessageResponse) => {
      console.log(response.status);
      this.messages = response.data;
    });
  }
}
