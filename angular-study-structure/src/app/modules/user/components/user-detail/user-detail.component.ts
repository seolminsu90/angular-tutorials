import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  @Input()
  user: User;

  @Output()
  cry = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onCry(msg: string): void {
    this.cry.emit(msg);
  }
}
