import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [UserService]
})
export class MainComponent implements OnInit {
  myUser: User = new User('설민수', 1990);

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  userAlert(msg: string): void {
    window.alert(msg);
  }

  httpClientGetTest() {
     this.userService.getUserFromFile()
        .subscribe(
          (user: User) => this.myUser = user,
          (error) => console.log(error),
          () => {}
        );
  }
}
