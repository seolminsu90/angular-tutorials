import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { MainComponent } from './pages/main/main.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { FormsModule } from '@angular/forms';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    MainComponent,
    UserDetailComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ]
})
export class UserModule { }
