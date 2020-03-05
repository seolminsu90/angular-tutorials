import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Article } from '../article/Article';

@Component({
selector: 'app-alert-component',
templateUrl: './alert.component.html',
styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  @Input()
  article: Article;

  @Output()
  notify = new EventEmitter();

  constructor() {
  }

  ngOnInit() {

  }
}
