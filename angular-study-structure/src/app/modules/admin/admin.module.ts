import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { MainComponent } from './pages/main/main.component';
import { SubComponent } from './pages/sub/sub.component';


@NgModule({
  declarations: [MainComponent, SubComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
