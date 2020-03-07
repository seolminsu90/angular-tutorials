import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private service: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  sudo(): void {
    this.service.changeAdmin();
    this.router.navigate(['/']);
  }
}
