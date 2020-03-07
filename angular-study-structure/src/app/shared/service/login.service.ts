import { Injectable } from '@angular/core';
import { Observable, Subject, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  val = false;
  constructor() { }

  changeAdmin(): void {
    this.val = true;
  }

  isAdmin(): boolean {
    return this.val;
  }
}
